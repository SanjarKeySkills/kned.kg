const mockMembers = [
    {
        path: require("../../../assets/active_members/seitek_dushenaliev.png"),
        id: 1,
    },
    {
        path: require("../../../assets/active_members/talant_omuraliev.png"),
        id: 2,
    },
    {
        path: require("../../../assets/active_members/saltanat_tazhibaeva.png"),
        id: 3,
    },
    {
        path: require("../../../assets/active_members/aaly_umakulov.png"),
        id: 4,
    },
    {
        path: require("../../../assets/active_members/nurdin_sultanbaev.png"),
        id: 5,
    },
    {
        path: require("../../../assets/active_members/zhanna_toktosunova.png"),
        id: 6,
    },
    {
        path: require("../../../assets/active_members/kubanych_abdraimov.png"),
        id: 7,
    },
    {
        path: require("../../../assets/active_members/nurgul_torobaeva.png"),
        id: 8,
    },
    {
        path: require("../../../assets/active_members/sultan_aiylchiev.png"),
        id: 9,
    },
    {
        path: require("../../../assets/active_members/gulsaara_atanova.png"),
        id: 10,
    },
    {
        path: require("../../../assets/active_members/ulan_bazarkulov.png"),
        id: 11,
    },
    {
        path: require("../../../assets/active_members/daniyar_amatov.png"),
        id: 12,
    },
    {
        path: require("../../../assets/active_members/sanjar_abakirov.png"),
        id: 13,
    },
    {
        path: require("../../../assets/active_members/venera_abdraimova.png"),
        id: 14,
    },
    {
        path: require("../../../assets/active_members/nurbek_elebaev.png"),
        id: 15,
    },
    {
        path: require("../../../assets/active_members/medet_nazaraliev.png"),
        id: 16,
    },
    {
        path: require("../../../assets/active_members/meerim_askarbekova.png"),
        id: 17,
    },
    {
        path: require("../../../assets/active_members/ruslan_kagirov.png"),
        id: 18,
    },
    {
        path: require("../../../assets/active_members/aigul_teleusheva.png"),
        id: 19,
    },
    {
        path: require("../../../assets/active_members/aibek_karamuratov.png"),
        id: 20,
    },
    {
        path: require("../../../assets/active_members/erkinbek_zhumabaev.png"),
        id: 21,
    },
    {
        path: require("../../../assets/active_members/gulbara_kudaibergenova.png"),
        id: 22,
    },
    {
        path: require("../../../assets/active_members/roman_polishev.png"),
        id: 23,
    },
    {
        path: require("../../../assets/active_members/gulchehra_kamchibekova.png"),
        id: 24,
    },
    {
        path: require("../../../assets/active_members/ermeev_zhyrgalbek.png"),
        id: 25,
    },
    {
        path: require("../../../assets/active_members/chynara_moldazhanova.png"),
        id: 26,
    },
    {
        path: require("../../../assets/active_members/ermek_myrzabekov.png"),
        id: 27,
    },
    {
        path: require("../../../assets/active_members/gulnara_shamshieva.png"),
        id: 28,
    },
    {
        path: require("../../../assets/active_members/zhamal_duishekeeva.png"),
        id: 29,
    },
    {
        path: require("../../../assets/active_members/cholpon_eshberdieva.png"),
        id: 30,
    },
    {
        path: require("../../../assets/active_members/abdyrashit_mukambetov.png"),
        id: 31,
    },
    {
        path: require("../../../assets/active_members/mirlan_balbaev.png"),
        id: 32,
    },
    {
        path: require("../../../assets/active_members/arslanbek_knenbaev.png"),
        id: 33,
    },
    {
        path: require("../../../assets/active_members/galina_gorozhenko.png"),
        id: 34,
    },
    {
        path: require("../../../assets/active_members/munarbek_atchabarov.png"),
        id: 35,
    },
    {
        path: require("../../../assets/active_members/chynara_ibraimova.png"),
        id: 36,
    },
    {
        path: require("../../../assets/active_members/askar_sydykov.png"),
        id: 37,
    },
    {
        path: require("../../../assets/active_members/sovetbek_zakirov.png"),
        id: 38,
    },
    {
        path: require("../../../assets/active_members/cholponbek_ahmatov.png"),
        id: 39,
    },

    {
        path: require("../../../assets/active_members/saule_teleusheva.png"),
        id: 40,
    },
    {
        path: require("../../../assets/active_members/armen_vanian.png"),
        id: 41,
    },
    {
        path: require("../../../assets/active_members/aibek_moldokadyrov.png"),
        id: 42,
    },
    {
        path: require("../../../assets/active_members/ermek_talasbaev.png"),
        id: 43,
    },
    {
        path: require("../../../assets/active_members/alexandr_lebedev.png"),
        id: 44,
    },
    {
        path: require("../../../assets/active_members/anar_nosinova.png"),
        id: 45,
    },
    {
        path: require("../../../assets/active_members/oleg_raldugin.png"),
        id: 46,
    },
    {
        path: require("../../../assets/active_members/nurkamila_alicheva.png"),
        id: 47,
    },
    {
        path: require("../../../assets/active_members/talant_kerimbaev.png"),
        id: 48,
    },
    {
        path: require("../../../assets/active_members/kerez_kelisheva.png"),
        id: 49,
    },
    {
        path: require("../../../assets/active_members/shahida_nurhadzhieva.png"),
        id: 50,
    },
    {
        path: require("../../../assets/active_members/kubat_alymkulov.png"),
        id: 51,
    },
    {
        path: require("../../../assets/active_members/samatbek_dzhumashev.png"),
        id: 52,
    },
    {
        path: require("../../../assets/active_members/oleg_kudyakov.png"),
        id: 53,
    },
    {
        path: require("../../../assets/active_members/rinat_rahimov.png"),
        id: 54,
    },
    {
        path: require("../../../assets/active_members/anton_dedikin.png"),
        id: 55,
    },
    {
        path: require("../../../assets/active_members/zhumash_sydykov.png"),
        id: 56,
    },
    {
        path: require("../../../assets/active_members/asseta_krasnozhonova.png"),
        id: 57,
    },
    // --- associated
    {
        path: require("../../../assets/associated_members/aizhan_mambetalieva.png"),
        id: 1001,
    },
    {
        path: require("../../../assets/associated_members/timur_tashkulov.png"),
        id: 1002,
    },
    {
        path: require("../../../assets/associated_members/mirlan_turdubek_uulu.png"),
        id: 1003,
    },
    {
        path: require("../../../assets/associated_members/asel_mamytova.png"),
        id: 1004,
    },
    {
        path: require("../../../assets/associated_members/baktybek_rysaliev.png"),
        id: 1005,
    },
    {
        path: require("../../../assets/associated_members/azamat_beyshembiev.png"),
        id: 1006,
    },
    {
        path: require("../../../assets/associated_members/askar_kaldarov.png"),
        id: 1007,
    },
    {
        path: require("../../../assets/associated_members/bolot_mambetkadyrov.png"),
        id: 1008,
    },
    {
        path: require("../../../assets/associated_members/aibek_buzurmankulov.png"),
        id: 1009,
    },
    {
        path: require("../../../assets/associated_members/aziza_sarazhieva.png"),
        id: 1010,
    },
    {
        path: require("../../../assets/associated_members/saltanat_ismailova.png"),
        id: 1011,
    },
    {
        path: require("../../../assets/associated_members/pardavay_abdraimov.png"),
        id: 1012,
    },
    {
        path: require("../../../assets/associated_members/amanat_moldokeeva.png"),
        id: 1013,
    },
    {
        path: require("../../../assets/associated_members/kamaldin_pirimbaev.png"),
        id: 1014,
    },
    {
        path: require("../../../assets/associated_members/izzat_aitnazarov.png"),
        id: 1015,
    },
    {
        path: require("../../../assets/associated_members/aigul_chertanova.png"),
        id: 1016,
    },
    {
        path: require("../../../assets/associated_members/rustam_sarybaev.png"),
        id: 1017,
    },
    {
        path: require("../../../assets/associated_members/cholpon_omukeeva.png"),
        id: 1018,
    },
    {
        path: require("../../../assets/associated_members/marina_osokeeva.png"),
        id: 1019,
    },
    {
        path: require("../../../assets/associated_members/azamat_akshamov.png"),
        id: 1020,
    },
    // --- honored
    {
        path: require("../../../assets/honored_members/a_kozhoshev.png"),
        id: 2001,
    },
    {
        path: require("../../../assets/honored_members/t_abdygulov.png"),
        id: 2002,
    },
    {
        path: require("../../../assets/honored_members/u_sarbanov.png"),
        id: 2003,
    },
];

export default mockMembers;
