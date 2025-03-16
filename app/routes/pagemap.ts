export const pagemap = [
  { path: "", name: "Home" },
  { path: "agg", name: "Agg" },
  {
    path: "check",
    name: "Check",
    children: [
      { path: "file", name: "File" },
      { path: "data", name: "Data" },
      { path: "finder", name: "Finder" },
    ],
  },
  {
    path: "sunspot_number",
    name: "Sunspot Number",
    children: [
      { path: "agg", name: "Agg" },
      {
        path: "whole_disk",
        name: "Whole Disk",
      },
      {
        path: "hemispheric",
        name: "Hemispheric",
      },
      {
        path: "with_silso",
        name: "With SILSO",
        children: [
          {
            path: "agg",
            name: "Agg",
          },
          {
            path: "with_silso",
            name: "With SILSO",
          },
          {
            path: "scatter",
            name: "Scatter",
          },
          {
            path: "ratio",
            name: "Ratio",
          },
          {
            path: "diff",
            name: "Diff",
          },
          {
            path: "ratio_diff_1",
            name: "Ratio and Difference 1",
          },
          {
            path: "ratio_diff_2",
            name: "Ratio and Difference 2",
          },
        ],
      },
      {
        path: "with_flare",
        name: "With Flare Index",
        children: [
          {
            path: "agg",
            name: "Agg",
          },
          {
            path: "with_flare",
            name: "With Flare Index",
          },
          {
            path: "with_flare_with_factor",
            name: "With Flare Index with factor",
          },
          {
            path: "hemispheric",
            name: "Hemispheric",
          },
          {
            path: "hemispheric_with_factors",
            name: "Hemispheric with factors",
          },
        ],
      },
    ],
  },
  {
    path: "observations",
    name: "Observations",
    children: [
      { path: "agg", name: "Agg" },
      { path: "monthly", name: "Monthly" },
      { path: "calendar", name: "Calendar" },
    ],
  },
  {
    path: "butterfly",
    name: "Butterfly Diagram",
    children: [
      { path: "agg", name: "Agg" },
      {
        path: "fromtext",
        name: "From old text file",
      },
      { path: "trim", name: "Trim" },
      { path: "image", name: "Image" },
      { path: "merge", name: "Merge" },
      { path: "image_color", name: "Color Image" },
      { path: "draw", name: "Draw" },
    ],
  },
  {
    path: "config",
    name: "Config",
    children: [
      {
        path: "sunspot_number",
        name: "Sunspot Number",
        children: [
          {
            path: "whole_disk",
            name: "Whole Disk",
          },
          {
            path: "hemispheric",
            name: "Hemispheric",
          },
          {
            path: "with_silso",
            name: "With SILSO",
            children: [
              {
                path: "with_silso",
                name: "With SILSO",
              },
              {
                path: "scatter",
                name: "Scatter",
              },
              {
                path: "ratio",
                name: "Ratio",
              },
              {
                path: "diff",
                name: "Difference",
              },
              {
                path: "ratio_diff_1",
                name: "Ratio and Difference 1",
              },
              {
                path: "ratio_diff_2",
                name: "Ratio and Difference 2",
              },
            ],
          },
          {
            path: "with_flare",
            name: "With Flare Index",
            children: [
              {
                path: "with_flare",
                name: "With Flare Index",
              },
              {
                path: "hemispheric",
                name: "Hemispheric",
              },
            ],
          },
        ],
      },
      {
        path: "observations",
        name: "Observations",
        children: [
          {
            path: "monthly",
            name: "Monthly",
          },
        ],
      },
      {
        path: "butterfly",
        name: "Butterfly Diagram",
        children: [
          {
            path: "butterfly",
            name: "Butterfly Diagram",
          },
          {
            path: "color_map",
            name: "Color Map",
          },
        ],
      },
    ],
  },
]
