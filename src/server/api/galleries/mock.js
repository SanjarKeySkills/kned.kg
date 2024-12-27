const mockGalleries = [
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_1.png"),
        id: 1,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_2.png"),
        id: 2,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_3.png"),
        id: 3,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_4.png"),
        id: 4,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_5.png"),
        id: 5,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_6.png"),
        id: 7,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_7.jpg"),
        id: 8,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_8.png"),
        id: 9,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_9.png"),
        id: 10,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_10.png"),
        id: 11,
    },
    {
        path: require("../../../assets/businessSaturdayData/280924/volynetz_11.png"),
        id: 12,
    },
    // ---
    {
        path: require("../../../assets/businessSaturdayData/270424/ahmetova_1.png"),
        id: 13,
    },
    {
        path: require("../../../assets/businessSaturdayData/270424/ahmetova_2.png"),
        id: 14,
    },
    {
        path: require("../../../assets/businessSaturdayData/270424/ahmetova_3.png"),
        id: 15,
    },
    {
        path: require("../../../assets/businessSaturdayData/270424/ahmetova_4.png"),
        id: 16,
    },
    {
        path: require("../../../assets/businessSaturdayData/270424/ahmetova_5.png"),
        id: 17,
    },
    // ---
    {
        path: require("../../../assets/businessSaturdayData/270124/kurmangziev_1.png"),
        id: 18,
    },
    {
        path: require("../../../assets/businessSaturdayData/270124/kurmangziev_2.png"),
        id: 19,
    },
    {
        path: require("../../../assets/businessSaturdayData/270124/kurmangziev_3.png"),
        id: 20,
    },
    {
        path: require("../../../assets/businessSaturdayData/270124/kurmangziev_4.png"),
        id: 21,
    },
    // ---
    {
        path: require("../../../assets/businessBreakfastData/010224/abdraimov_moldokeeva_1.png"),
        id: 22,
    },
    {
        path: require("../../../assets/businessBreakfastData/010224/abdraimov_moldokeeva_2.png"),
        id: 23,
    },
    {
        path: require("../../../assets/businessBreakfastData/010224/abdraimov_moldokeeva_3.png"),
        id: 24,
    },
    {
        path: require("../../../assets/businessBreakfastData/010224/abdraimov_moldokeeva_4.png"),
        id: 25,
    },
    {
        path: require("../../../assets/businessBreakfastData/010224/abdraimov_moldokeeva_5.png"),
        id: 26,
    },
    {
        path: require("../../../assets/businessBreakfastData/010224/abdraimov_moldokeeva_6.jpg"),
        id: 27,
    },
    {
        path: require("../../../assets/businessBreakfastData/010224/abdraimov_moldokeeva_7.jpg"),
        id: 28,
    },
    {
        path: require("../../../assets/businessBreakfastData/010224/abdraimov_moldokeeva_8.jpg"),
        id: 29,
    },
    // ---
    {
        path: require("../../../assets/businessBreakfastData/180924/arymkulova_1.png"),
        id: 30,
    },
    {
        path: require("../../../assets/businessBreakfastData/180924/arymkulova_2.png"),
        id: 31,
    },
    {
        path: require("../../../assets/businessBreakfastData/180924/arymkulova_3.png"),
        id: 32,
    },
    {
        path: require("../../../assets/businessBreakfastData/180924/arymkulova_4.png"),
        id: 33,
    },
    {
        path: require("../../../assets/businessBreakfastData/180924/arymkulova_5.png"),
        id: 34,
    },
    // ---
    {
        path: require("../../../assets/businessBreakfastData/120424/capstone_1.png"),
        id: 35,
    },
    {
        path: require("../../../assets/businessBreakfastData/120424/capstone_2.png"),
        id: 36,
    },
    // ---
    {
        path: require("../../../assets/businessBreakfastData/021024/ivanova_1.png"),
        id: 37,
    },
    {
        path: require("../../../assets/businessBreakfastData/021024/ivanova_2.png"),
        id: 38,
    },
    {
        path: require("../../../assets/businessBreakfastData/021024/ivanova_3.png"),
        id: 39,
    },
    {
        path: require("../../../assets/businessBreakfastData/021024/ivanova_4.png"),
        id: 40,
    },
    {
        path: require("../../../assets/businessBreakfastData/021024/ivanova_5.png"),
        id: 41,
    },
    // ---
    {
        path: require("../../../assets/eventData/060924/ks_tot_1.png"),
        id: 42,
    },
    {
        path: require("../../../assets/eventData/060924/ks_tot_2.png"),
        id: 43,
    },
    {
        path: require("../../../assets/eventData/060924/ks_tot_3.png"),
        id: 44,
    },
    {
        path: require("../../../assets/eventData/060924/ks_tot_4.png"),
        id: 45,
    },
    {
        path: require("../../../assets/eventData/060924/ks_tot_5.png"),
        id: 46,
    },
    // ---
    {
        path: require("../../../assets/eventData/190724/kd_sertif_1.png"),
        id: 47,
    },
    {
        path: require("../../../assets/eventData/190724/kd_sertif_2.png"),
        id: 48,
    },
    {
        path: require("../../../assets/eventData/190724/kd_sertif_3.png"),
        id: 49,
    },
    {
        path: require("../../../assets/eventData/190724/kd_sertif_4.png"),
        id: 50,
    },
    {
        path: require("../../../assets/eventData/190724/kd_sertif_5.png"),
        id: 51,
    },
    {
        path: require("../../../assets/eventData/190724/kd_sertif_6.png"),
        id: 52,
    },
    // ---
    {
        path: require("../../../assets/eventData/010824/gulsaara_atanova.png"),
        id: 53,
    },
    // ---
    {
        path: require("../../../assets/eventData/040324/ifc_meetup_1.png"),
        id: 54,
    },
    {
        path: require("../../../assets/eventData/040324/ifc_meetup_2.png"),
        id: 55,
    },
    {
        path: require("../../../assets/eventData/040324/ifc_meetup_3.png"),
        id: 56,
    },
    {
        path: require("../../../assets/eventData/040324/ifc_meetup_4.png"),
        id: 57,
    },
    {
        path: require("../../../assets/eventData/040324/ifc_meetup_5.png"),
        id: 58,
    },
    // ---
    {
        path: require("../../../assets/eventData/220524/kd_kurs_1.png"),
        id: 59,
    },
    {
        path: require("../../../assets/eventData/220524/kd_kurs_2.png"),
        id: 60,
    },
    {
        path: require("../../../assets/eventData/220524/kd_kurs_3.png"),
        id: 61,
    },
    {
        path: require("../../../assets/eventData/220524/kd_kurs_4.png"),
        id: 62,
    },
    {
        path: require("../../../assets/eventData/220524/kd_kurs_5.png"),
        id: 63,
    },
    {
        path: require("../../../assets/eventData/220524/kd_kurs_6.png"),
        id: 64,
    },
    {
        path: require("../../../assets/eventData/220524/kd_kurs_7.png"),
        id: 65,
    },
    {
        path: require("../../../assets/eventData/220524/kd_kurs_8.png"),
        id: 66,
    },
    {
        path: require("../../../assets/eventData/220524/kd_kurs_9.png"),
        id: 67,
    },
    {
        path: require("../../../assets/eventData/220524/kd_kurs_10.png"),
        id: 68,
    },
    // ---
    {
        path: require("../../../assets/eventData/190424/nduk_1.png"),
        id: 69,
    },
    {
        path: require("../../../assets/eventData/190424/nduk_2.png"),
        id: 70,
    },
    {
        path: require("../../../assets/eventData/190424/nduk_3.png"),
        id: 71,
    },
    {
        path: require("../../../assets/eventData/190424/nduk_4.png"),
        id: 72,
    },
    {
        path: require("../../../assets/eventData/190424/nduk_5.png"),
        id: 73,
    },
    {
        path: require("../../../assets/eventData/190424/nduk_6.png"),
        id: 74,
    },
];

export default mockGalleries;
