import type { Page } from "@/utils/pageMap"

/**
 * `NavInfo` インターフェースは、ナビゲーションメニューの各項目を表す。
 */
export interface NavInfo {
  /** ナビゲーション項目のリンク先URL */
  href: string
  /** ナビゲーション項目の表示名 */
  name: string
  /** 現在表示中のページかどうかを示すフラグ */
  isCurrentPage: boolean
  /** 子ナビゲーション項目のリスト（存在しない場合は undefined） */
  children?: NavInfo[]
}

/**
 * ページマップ (`Page[]`) をナビゲーション情報 (`NavInfo[]`) に変換する関数。
 *
 * @param pageMap - ページ情報のリスト (`Page[]`)
 * @param currentPath - 現在のページのパス
 * @returns ナビゲーション情報 (`NavInfo[]`)
 */
export const convertPageMapToNavInfos = (
  pageMap: Page[],
  currentPath: string,
): NavInfo[] => {
  /**
   * 再帰的にページ情報をナビゲーション情報へ変換する内部関数。
   *
   * @param pages - 処理対象のページリスト
   * @param parentPath - 親ページのパス（デフォルトは "/"）
   * @param res - 結果を格納する配列（初期値は空配列）
   * @returns 変換されたナビゲーション情報 (`NavInfo[]`)
   */
  const r = (pages: Page[], parentPath = "/", res: NavInfo[] = []): NavInfo[] =>
    pages.map((p) => {
      const path = `${parentPath + p.identifier}/`
      const isCurrentPage = path === currentPath

      let children = undefined
      if (p.children) {
        children = r(p.children, path)
      }

      return {
        href: path,
        name: p.name,
        isCurrentPage,
        children: children,
      }
    })

  return r(pageMap)
}

export const extractNavInfoSectionsByPath = (
  navInfos: NavInfo[],
  path: string,
): NavInfo[][] => {
  const pathElements = path.split("/").slice(1)
  let result: NavInfo[][] = [navInfos]

  pathElements.forEach((e, i) => {
    const children = result[i].filter((x) => x.name === e)[0].children
    if (children) {
      result.push(children)
    }
  })

  const lastPath = (nv: NavInfo): string => {
    const r = (nv: NavInfo): string => {
      if (nv.children) {
        return r(nv.children[0])
      }
      return nv.href
    }

    return r(nv)
  }

  result = result.map((x) =>
    x.map((y) => {
      const result: NavInfo = {
        ...y,
        href: lastPath(y),
      }
      return result
    }),
  )
  return result
}
