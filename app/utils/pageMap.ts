export interface Page {
  identifier: string
  name: string
  children?: Page[]
}

export const pageMap: Page[] = [
  { identifier: "", name: "Home" },
  { identifier: "agg", name: "Agg" },
  {
    identifier: "check",
    name: "Check",
    children: [
      { identifier: "file", name: "File" },
      { identifier: "data", name: "Data" },
      { identifier: "finder", name: "Finder" },
    ],
  },
  {
    identifier: "sunspot_number",
    name: "Sunspot Number",
    children: [
      { identifier: "agg", name: "Agg" },
      {
        identifier: "whole_disk",
        name: "Whole Disk",
      },
      {
        identifier: "hemispheric",
        name: "Hemispheric",
      },
      {
        identifier: "with_silso",
        name: "With SILSO",
        children: [
          {
            identifier: "agg",
            name: "Agg",
          },
          {
            identifier: "with_silso",
            name: "With SILSO",
          },
          {
            identifier: "scatter",
            name: "Scatter",
          },
          {
            identifier: "ratio",
            name: "Ratio",
          },
          {
            identifier: "diff",
            name: "Diff",
          },
          {
            identifier: "ratio_diff_1",
            name: "Ratio and Difference 1",
          },
          {
            identifier: "ratio_diff_2",
            name: "Ratio and Difference 2",
          },
        ],
      },
      {
        identifier: "with_flare",
        name: "With Flare Index",
        children: [
          {
            identifier: "agg",
            name: "Agg",
          },
          {
            identifier: "with_flare",
            name: "With Flare Index",
          },
          {
            identifier: "with_flare_with_factor",
            name: "With Flare Index with factor",
          },
          {
            identifier: "hemispheric",
            name: "Hemispheric",
          },
          {
            identifier: "hemispheric_with_factors",
            name: "Hemispheric with factors",
          },
        ],
      },
    ],
  },
  {
    identifier: "observations",
    name: "Observations",
    children: [
      { identifier: "agg", name: "Agg" },
      { identifier: "monthly", name: "Monthly" },
      { identifier: "calendar", name: "Calendar" },
    ],
  },
  {
    identifier: "butterfly",
    name: "Butterfly Diagram",
    children: [
      { identifier: "agg", name: "Agg" },
      {
        identifier: "fromtext",
        name: "From old text file",
      },
      { identifier: "trim", name: "Trim" },
      { identifier: "image", name: "Image" },
      { identifier: "merge", name: "Merge" },
      { identifier: "image_color", name: "Color Image" },
      { identifier: "draw", name: "Draw" },
    ],
  },
  {
    identifier: "config",
    name: "Config",
    children: [
      {
        identifier: "sunspot_number",
        name: "Sunspot Number",
        children: [
          {
            identifier: "whole_disk",
            name: "Whole Disk",
          },
          {
            identifier: "hemispheric",
            name: "Hemispheric",
          },
          {
            identifier: "with_silso",
            name: "With SILSO",
            children: [
              {
                identifier: "with_silso",
                name: "With SILSO",
              },
              {
                identifier: "scatter",
                name: "Scatter",
              },
              {
                identifier: "ratio",
                name: "Ratio",
              },
              {
                identifier: "diff",
                name: "Difference",
              },
              {
                identifier: "ratio_diff_1",
                name: "Ratio and Difference 1",
              },
              {
                identifier: "ratio_diff_2",
                name: "Ratio and Difference 2",
              },
            ],
          },
          {
            identifier: "with_flare",
            name: "With Flare Index",
            children: [
              {
                identifier: "with_flare",
                name: "With Flare Index",
              },
              {
                identifier: "hemispheric",
                name: "Hemispheric",
              },
            ],
          },
        ],
      },
      {
        identifier: "observations",
        name: "Observations",
        children: [
          {
            identifier: "monthly",
            name: "Monthly",
          },
        ],
      },
      {
        identifier: "butterfly",
        name: "Butterfly Diagram",
        children: [
          {
            identifier: "butterfly",
            name: "Butterfly Diagram",
          },
          {
            identifier: "color_map",
            name: "Color Map",
          },
        ],
      },
    ],
  },
]
