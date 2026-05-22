// Section 1
vegaEmbed("#map_victoria", "js/map_victoria_overview.vg.json", { actions: false });
vegaEmbed("#bar_mode_distribution", "js/bar_mode_distribution.vg.json", { actions: false });
vegaEmbed("#map_melbourne", "js/map_melbourne_detail.vg.json", { actions: false });

// Section 2
vegaEmbed("#idoim2", "js/heatmap_trip_purpose_mode.vg.json", { actions: false });
vegaEmbed("#idoim3", "js/stacked_age_mode.vg.json", { actions: false });
vegaEmbed("#idoim4", "js/dot_income_pt_ordered.vg.json", { actions: false });

// Section 3
vegaEmbed("#idoim5", "js/choropleth_stop_density_melbourne_lga.vg.json", { actions: false });
vegaEmbed("#scatter_access_gap", "js/dot_melbourne_stop_density_extremes.vg.json", { actions: false });

// Section 4
vegaEmbed("#line_patronage", "js/line_patronage.vg.json", { actions: false });
vegaEmbed("#bar_weekday_weekend", "js/bar_weekday_weekend.vg.json", { actions: false });

// Section 5
vegaEmbed("#network_tourism", "js/network_tourism_rail_access.vg.json", { actions: false });
vegaEmbed("#grid_tourism_access", "js/grid_map_tourism_access.vg.json", { actions: false });
vegaEmbed("#area_tourism_demand", "js/stacked_area_tourism_demand.vg.json", { actions: false });
vegaEmbed("#bubble_tourism", "js/bubble_tourism_rail_access.vg.json", { actions: false });
