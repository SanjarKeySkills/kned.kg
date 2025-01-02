import { getMemberPathById } from "../../../server/api/members/id";

const membersData = [
    {
        id: "1",
        name: "Айжан Мамбеталиева",
        annotation:
            "Более 10 лет опыта на руководящей должности в риск-менеджменте в банковской сфере.",
        image: getMemberPathById(1001),
        jobExp: "Более 10 лет опыта на руководящей должности в риск-менеджменте в банковской сфере. С ноября 2023 года по настоящее время Вице-Президент ОО «Палата Независимых Директоров Кыргызской Республики». С июля 2022 года по настоящее время ESG-эксперт ЗАО “Банк Азии”, менеджер проекта первых социальных гендерных облигаций на финансовом рынке Кыргызской Республики. C 1 января 2023 года по август 2023 года Корпоративный Секретарь в ОО «Палата Независимых Директоров Кыргызской Республики». C 24 июня 2022 года по 31 декабрь 2022 года Проектный менеджер в ОО «Палата Независимых Директоров Кыргызской Республики». С 2021 по 2022 года Начальник Службы риск-менеджмента ОАО «Коммерческий банк КЫРГЫЗСТАН» (MBANK), март-июнь 2021 Data-аналитик. В 2021 году менеджер по антифроду в цифровом бизнесе ЗАО «Банк Компаньон», ведение проекта внедрения системы антифрода в онлайн каналах банка, активное продвижение проекта в других коммерческих банках Кыргызской Республики. С 2019 по 2021 года Руководитель Службы риск-менеджмента ОАО «Керемет Банк». С 2012 по 2018 гг. Руководитель Службы риск-менеджмента в ОАО «Бакай Банк». С 2024 года является членом Листингового Комитета Кыргызской Фондовой Биржи.",
        edu: "Кыргызско-Российский Славянский Университет им. Б. Ельцина (г. Бишкек), Высшее экономическое образование Специальность: «Математические методы и исследование операций в экономике»; Квалификация: Экономист-математик, оценщик недвижимости.",
        competence:
            "Риск-менеджмент; ESG; Бизнес-процессы; Data analysis; Фрод-менеджмент в цифровом бизнесе",
        sertif: "",
    },
    {
        id: "2",
        name: "Тимур Ташкулов",
        annotation: "Эксперт по корпоративной безопасности",
        image: getMemberPathById(1002),
        jobExp: "Более 10-ти лет опыта работы в Аппарате Правительства КР, Аппарате Президента - Совет Безопасности КР, в правоохранительных органах КР, имеет специальное звание Полковник милиции. Имеет Государственный чин КР, Советник Государственной службы – 1 класса. В период работы в Аппарате Правительства и Аппарате Президента Кыргызской Республики курировал вопросы Министерства внутренних дел, Государственной службы исполнения наказаний, Министерства обороны, Агентства по контролю за наркотиками при Правительстве Кыргызской Республики. При его участии, а также лично им были разработаны ряд законов и др. нормативных правовых актов (постановления, распоряжения и указы Президента), регламентирующие деятельность МВД, ГСИН, АКН, Минобороны. Более трех лет работы на руководящих должностях в банковской деятельности; В настоящее время является начальником Службы Безопасности ОАО «Керемет Банк».",
        edu: "Окончил Академию МВД Кыргызской Республики имени генерал-майора милиции Э. Алиева по специальности юриспруденция. Дополнительное образование: «Управление кризисом» - город Каир, арабская республика Египет 2009-2010 г.; Обеспечение безопасности во время проведения Президентских выборов (независимый наблюдатель) - Франция г. Париж 2012 г.; Высокие технологии в системе связи и обеспечение информационной безопасности - Турция г. Анкара 2013 г.; Обеспечение безопасности региона по противодействию международному наркотрафику в рамках Шанхайской организации сотрудничества (ШОС) - КНР, г. Пекин, г, Урумчи «ШОС»; Изучение Пенитенциарной системы Финляндии - Финляндия г. Хельсинки 2018 г.; Внедрение системы службы Пробации при Министерстве юстиции Латвии - Латвия г. Рига 2019 г.; Противодействие финансированию террористической деятельности и легализации (отмыванию) преступных доходов - Учебно-методический центр Государственной Службы Финансовой разведки при Кабинете Министров КР г. Бишкек, 2021 г.",
        competence:
            "Эксперт по корпоративной защите; Организационно-инспекторская деятельность; Противодействие финансированию террористической деятельности и легализации (отмыванию) преступных доходов; Проведение служебных расследований; Банковская деятельность.",
        sertif: "",
    },
    {
        id: "3",
        name: "Мирлан Турдубек уулу",
        annotation: "Двадцать лет в сфере логистики и международных перевозок.",
        image: getMemberPathById(1003),
        jobExp: "Двадцать лет в сфере логистики и международных перевозок. 2001 – 2005 - YEKAS Warehousing, Sea, Road, Air Transportations, Turkey. 2005 – 2006 - SAFIR Shipping & Forwarding Company, Turkey. 2006 – 2010 - LOGIMAR Logistics Services Company, Turkey. 2011 – 2013 - ADAL Food Logistics Services Company, Turkey. 2014 – 2015 - LOGIMAR Logistics Services Company, Turkey. 2015 – 2021 – GEFCO, Turkey. 2022 – «UBS TRANSIT», Кыргызстан.",
        edu: "Университет Мармара (Стамбул).",
        competence:
            "Умение работать с большими объемами информации, грамотно ее анализировать систематизировать и структурировать; Умение рационально ранжировать задачи; Аккуратность в профессиональной деятельности; Отличные организационные навыки; Координационные способности",
        sertif: "",
    },
    {
        id: "4",
        name: "Асель Мамытова",
        annotation:
            "Ассоциированный член Палаты Независимых Директоров Кыргызской Республики",
        image: getMemberPathById(1004),
        jobExp: "",
        edu: "",
        competence: "",
        sertif: "",
    },
    {
        id: "5",
        name: "Бактыбек Рысалиев",
        annotation: "Двадцать лет в сфере в банковской сфере.",
        image: getMemberPathById(1005),
        jobExp: "Двадцать лет в сфере в банковской сфере. Начинал стажером в операционном отделе головного офиса ОАО «КСФК», через месяц переведен в бухгалтеры каракольского филиала «КСФК». В апреле 2006 года переведен на должность бухгалтера-финансиста ошского филиала «КСФК». В конце 2006 года «КСФК» переименован в «Айыл Банк». В октябре 2017 года переведен на должность главного бухгалтера таласского филиала «Айыл Банка». 2012 – 2019 - управляющий таласского филиала ОАО «Бакай Банк». Октябрь 2019 – май 2021 – заведующий СК/начальник сектора финансирования Исламского финансового центра ОАО «Бакай Банк» (по согласованию с Национальным банком КР). На руководящей должности - более восьми лет и отдельно два года - по ИПФ (исламские принципы финансирования). Май - декабрь 2021 года – бизнес-консультант в Центре поддержки предпринимательства в ОЮЛ «Бизнес-ассоциация Талас JIA». С марта 2022 года - финансовый консультант в Центре поддержки предпринимательства в ОЮЛ «Бизнес-ассоциация Талас JIA».",
        edu: "Бишкекский Государственный Университет Экономики и Предпринимательства (Кыргызский Экономический Университет им. М.Рыскулбекова), высшее экономическое образование, специальность - Бухгалтерский учет, анализ и аудит.",
        competence:
            "Финансовый менеджмент; Управленческий учет; Финансовый учет; Управление персоналом; Бизнес-процессы; Менеджмент в бизнесе; Аналитика; Бизнес-консультант в предпринимательстве.",
        sertif: "",
    },
    {
        id: "6",
        name: "Азамат Бейшембиев",
        annotation:
            "Ассоциированный член Палаты Независимых Директоров Кыргызской Республики",
        image: getMemberPathById(1006),
        jobExp: "",
        edu: "",
        competence: "",
        sertif: "",
    },
    {
        id: "7",
        name: "Аскар Калдаров",
        annotation:
            "Ассоциированный член Палаты Независимых Директоров Кыргызской Республики",
        image: getMemberPathById(1007),
        jobExp: "",
        edu: "",
        competence: "",
        sertif: "",
    },
    {
        id: "8",
        name: "Болот Мамбеткадыров",
        annotation:
            "Опыт работы в финансовой сфере более 12-ти лет, последние 5 лет в банковской сфере",
        image: getMemberPathById(1008),
        jobExp: "Опыт работы в финансовой сфере более 12-ти лет, последние 5 лет в банковской сфере. \n Опыт работы на фондовом рынке. Имеет опыт государственной службы. \n Работал в управлении надзора за рынком ценных бумаг в Государственной службе регулирования и надзора за финансовым рынком ПКР (Госфиннадзор), в 2012 году продолжил службу на руководящих должностях в Фонде по управлению государственным имуществом при Правительстве КР (ФУГИ). Занимал должности, Советника руководителя, корпоративного секретаря, экономиста, менеджера по закупкам и тендерам, заместителя директора по брокерской деятельности в различных коммерческих организациях.",
        edu: "2004 год - Кыргызский государственный университет строительства, транспорта и архитектуры. \n Специальность Международные экономические отношения.",
        competence:
            "Внедрение и совершенствование системы корпоративного управления. \n Защита прав акционеров/инвесторов \n Содействие в принятии своевременных и верных корпоративных решений \n Работа на фондовом рынке, управление персоналом \n Взаимодействие с государственными органами \n Организационные и аналитические навыки.",
        sertif: "Сертификат на тему: Организация и функционирование рынка ценных бумаг Кыргызской Республики; \n Сертификат на тему: Управление государственными закупками товаров, работ и услуг; \n Сертификат на тему: Корпоративное управление в банках. \n Квалификационное свидетельство руководителя высшего звена по специализациям: Доверительное управление инвестиционными активами; \n Брокерская/Дилерская деятельность на рынке ценных бумаг.",
    },
    {
        id: "9",
        name: "Айбек Бузурманкулов",
        annotation:
            "Ассоциированный член Палаты Независимых Директоров Кыргызской Республики",
        image: getMemberPathById(1009),
        jobExp: "",
        edu: "",
        competence: "",
        sertif: "",
    },
    {
        id: "10",
        name: "Азиза Саражиева",
        annotation:
            "Комплаенс офицер со стажем работы с 2009 года в банковском секторе и других финансовых учреждениях в сфере внутреннего контроля, Комплаенс и Комплаенс-рисков.",
        image: getMemberPathById(1010),
        jobExp: "Комплаенс офицер со стажем работы с 2009 года в банковском секторе и других финансовых учреждениях в сфере внутреннего контроля, Комплаенс и Комплаенс-рисков. Последние 6 лет на руководящей позиции в данном направлении. \n В настоящее время - руководитель отдела Комплаенс-контроля Значимой платежной системы ОсОО «ПЭЙ 24». Ранее занималась вопросами комплаенс в банках второго уровня Кыргызстана: ОАО «Коммерческий банк Кырзыстан», ОАО «Росинбанк» и ОАО «Азия Универсал Банк». \n Член Ассоциации Комплаенс и деловой этики Республики Казахстан. \n Член Compliance Hub Республики Казахстан.",
        edu: "Академия Управления при Президенте КР. Экономический факультет, специальность «Бух учет, аудит и анализ». Диплом с отличием № СD060230179 от 16.06.2006г. \n Бишкекский Финансово- Экономический техникум имени А.Токтоналиева. Факультет «Бух учет, аудит и анализ хозяйственной деятельности». Диплом с отличием № 01147 от 02.07.2001г. \n Mini MBA KRJC «Practical Business Management Course». Сертификат № PBMC 2229004 - 2022 год. \n Курс «Независимый директор», QID Казахстан \n Курс «Комплаенс и управление рисками», QID Казахстан ",
        competence:
            "Риск-менеджмент \n Финансовый учет \n Комплаенс \n Корпоративное управление",
        sertif: "Сертификат QID по прогрмме “Независимый директор. Успешная карьера”. Дата прохождения программы: с 17 по 19 февраля 2023 года. \n Сертификат Азиатского банка развития о прохождении тренинга по теме: «Методическое руководство по проведению секторальной оценки рисков отмывания денег/финансирования терроризма: банк и поставщик платежных услуг». Дата прохождения программы: с 11 по 13 апреля 2022 года. \n Сертификат QID и “Almaty Management University” по программе «Комплаенс и управдение рисками». Дата прохождения программы: с 15 по 16 апреля 2023 года. \n Сертификат программы Совета Европы Содействие прозрачности и борьбе с экономическими преступлениями о прохождении тренинга на тему: «Обучение по бенефициарному владению и прозрачности юридических лиц». Дата прохождения программы: 26 апреля 2023 года.",
    },
    {
        id: "11",
        name: "Салтанат Исманова",
        annotation: "Директор по развитию ОсОО «Кулун-Ата-Алайку»",
        image: getMemberPathById(1011),
        jobExp: "Директор по развитию ОсОО «Кулун-Ата-Алайку». Ведет предпринимательскую деятельность",
        edu: "Высшее образование по направлению Финансы и Кредит \n Высшее образование по специальности юриспруденция.",
        competence: "",
        sertif: "",
    },
    {
        id: "12",
        name: "Пардавай Абдраимов",
        annotation:
            "Имеет опыт кредитования и регионального развития в рамках работы микро-кредитных организаций",
        image: getMemberPathById(1012),
        jobExp: "Является Руководителем исламского окна в ОсОО МКК Байлык Финанс. \n Имеет опыт кредитования и регионального развития в рамках работы в ОсОО МКК Байлык Финанс, МКК Капитал Плюс, МКК «Молбулак Финанс», Группа «Компанион». Имеет опыт работы в страховой компании СК «Аманатплюс». \n Образование высшее Финансы и кредит.",
        edu: "Высшее образование по направлению Финансы и Кредит \n Высшее образование по специальности юриспруденция.",
        competence: "Финансы",
        sertif: "",
    },
    {
        id: "13",
        name: "Аманат Молдокеева",
        annotation: "Имеет опыт работы в реальном и финансовом секторах.",
        image: getMemberPathById(1013),
        jobExp: "Директор по финансово административным вопросам ОАО НХК «Наследие Великих Кочевников». \n Опыт работы в реальном и финансовом секторах. \n Возглавляла казначейство в коммерческих банках АКБ Кыргызстан, ОАО РСК банк, ОАО Халык Банк. \n Была финансовым директором ОсОО «Кыргыз логистик сервис»(Джеруй), заместителем финансового директора компании Red Petroleum Company.",
        edu: "Высшее экономическое образование. Диплом об окончании КНУ им. Ж. Баласагына.",
        competence: "Финансы",
        sertif: "",
    },
    {
        id: "14",
        name: "Камалдин Пиримбаев",
        annotation:
            "Обладает более 15 летним опытом работы в области телекоммуникаций",
        image: getMemberPathById(1014),
        jobExp: "Обладает более 15 летним опытом работы в области телекоммуникаций. В настоящее время является Руководителем отдела развития клиентской ценности Департамента Big Data и управления клиентской ценностью АО «Kcell» (Казахстан). \n Ранее работал на различных позициях в компаниях Beeline (Казахстан), Бител (Кыргызстан).",
        edu: "Бакалавр в области IT (КТУ им. Манаса), Магистр в области IT (КГУ им. Баласагына), \n Магистр делового администрирования КГУ им. Баласагына.",
        competence:
            "Телекоммуникации \n Проектное управление в IT, \n техническая экспертиза в области мобильной связи и IT \n стратегическое планирование в IT, \n Общее развитие и управление команды, digital трансформация, развитие Big Data.",
        sertif: "",
    },
    {
        id: "15",
        name: "Иззат Айтназаров",
        annotation:
            "Со-основатель компании по производству итальянского мороженого в г. Ош.",
        image: getMemberPathById(1015),
        jobExp: "Заместитель председателя по финансам и экономике АО «Кыргызнефтегаз» (член совета директоров ЗАО «Кыргыз Петролеум Компани», генеральный директор ПФК «Нефтчи») январь 2021-май 2022. \n Руководитель службы закупок, логистики и административных вопросов ОсОО «Скай Мобайл» (ТМ Beeline) март 2016 - май 2019. \n Директор отдела внутреннего аудита (по совместительству член совета директоров) ЗАО «Азияцемент» - цементный завод г. Пенза октябрь 2014 - июль 2015. \n 10 лет работы в большой четверке (Делойт, Эрнст энд Янг) в области корпоративных финансов, оценке бизнеса и аудита.",
        edu: "Бакалавр управления бизнеса Американского университета в Центральной Азии. \n Магистр по экономике КИМЭП(Алматы).",
        competence:
            "Компетенции управления командой сотрудников 50 и более сотрудников; \n Лидерские качества и навыки обучения младших сотрудников в ведении и управлении аудиторских проектов и проведении пред-инвестиционного анализа; \n Умение оптимизации организационной структуры и бизнес-процессов в закупках, логистике и финансовой отчетности; \n Широкие познания в области финансовой отчетности в соответствии с МСФО; \n Навыки по оценке стоимости бизнеса, основных средств и финансовом моделировании; \n Понимание системы внутренних контролей предприятий.",
        sertif: "",
    },
    {
        id: "16",
        name: "Айгуль Чертанова",
        annotation:
            "Эксперт в области построения эффективных команд и систем, развития организаций.",
        image: getMemberPathById(1016),
        jobExp: "Эксперт в области построения эффективных команд и систем, развития организаций. Директор по развитию группы компаний «Тойбосс», флагмана пищевой и агропромышленной отрасли Кыргызстана. Член Правления KJCC - Кыргызско-Японской Торговой Палаты. \n Преподаватель КЭУ HR Master Program, эксперт по HR и личной эффективности KRJC – Кыргызско-Японского Центра Человеческого развития, бизнес-тренер. Член жюри HR Brand Central Asia, Алматы 2019, 2022, 2023. \n Член экспертного жюри международной HR премии EMBRAS, Ташкент, 2021, 2022 и 2023. Спикер международных конференций. \n Работала административным директором Компании «Red Petroleum», директором по развитию «Kyrgyz Concept», менеджером по управлению талантами Университета Центральной Азии, руководителем Учебного Центра и Методологии KICB, руководителем управления человеческим капиталом FMFC, руководителем HR Комитета AKDN KR, руководителем управления персоналом Компании «Газпром нефть Азия», директором по персоналу Компании «Шоро».",
        edu: "Кыргызско-Российский Славянский университет им. Б. Елцина, Высшее юридическое образование. \n Специальность: «Юриспруденция» (1995-2000).",
        competence:
            "Управление персоналом; \n Организационное развитие; \n Бизнес процессы; \n Стратегическое планирование и корпоративное развитие; \n Операционная эффективность; \n Управление изменениями.",
        sertif: "",
    },

    {
        id: "17",
        name: "Рустам Сарыбаев",
        annotation:
            "Имеет 10-летний опыт в области управления проектами по устойчивому финансированию, цифровизации финансовых сервисов, повышению финансовой грамотности.",
        image: getMemberPathById(1017),
        jobExp: "В настоящее время является директором Учебного центра Союза банков Кыргызстана. \n Имеет 10-летний опыт в области управления проектами, связанными с устойчивым финансированием, цифровизацией финансовых сервисов, повышения финансовой грамотности. \n Осуществлял трудовую деятельность на следующих должностях: \n Менеджер по проектам ОЮЛ «Союз банков Кыргызстана» 2010-2023гг., \n Коммерческий директор, Соучредитель ООО «МастерПак», 2019-2021гг.; \n Менеджер по развитию, Ала-Тоо Кыргызская Лизинговая Компания 2023-204гг..",
        edu: "2010-2012 Академия управления при Президенте Кыргызской Республики, «Магистр делового администрирования». \n 2002-2007 Кыргызско-Турецкий Университет Манас «Коммуникации».",
        competence:
            "Управление проектами; \n Цифровизация финансовых сервисов.",
        sertif: "",
    },
    {
        id: "18",
        name: "Чолпон Омукеева",
        annotation: "Начальник Службы Внутреннего Аудита ЗАО АКБ «Толубай».",
        image: getMemberPathById(1018),
        jobExp: "С 4.09.2019 год - по настоящее время. Начальник Службы Внутреннего Аудита ЗАО АКБ «Толубай». \n С 24.06.2019 год - 4.09.2019 год. Главный специалист отдела кредитного администрирования Управления бухгалтерского учета и отчетности. ЗАО АКБ «Толубай». \n С 1.03.2017 год - 24.06.2019 год. Главный специалист сберегательной кассы №032-0-03. ЗАО АКБ «Толубай». \n С 29.12.2014 год - 1.03.2017 год. Главный специалист сберегательной кассы №032-0-01. ЗАО АКБ «Толубай». \n С 9.12.2014 год - 29.12.2014 год. Главный специалист ОРК Бишкекского Филиала. ЗАО АКБ «Толубай». \n С 18.09.2014 год - 9.12.2014 год. Старший бухгалтер ОПО УБУиО. ЗАО АКБ «Толубай». \n С 22.04.2013 год - 18.09.2014 год. Старший бухгалтер ОРК БФ. ЗАО АКБ «Толубай». \n С 23.01.2012 год - 22.04.2013 год. Бухгалтер ОРК Бишкекского Филиала. ЗАО АКБ «Толубай».",
        edu: "2005-2010 годы. Восточный университет им. Махмуда Кашгари-Барскани (с отличием). Специальность: Экономист. \n 2011-2014 годы. Кыргызская Государственная Юридическая Академия при Правительстве Кыргызской Республики. Специальность: Юрист. \n Член Института Профессиональных Бухгалтеров и Аудиторов Кыргызстана.",
        competence: "Бухгалтерский учет, \n Внутренний контроль и аудит.",
        sertif: "",
    },
    {
        id: "19",
        name: "Марина Осокеева",
        annotation:
            "Более 16 лет общего опыта работы в сфере консалтинга, страхования, пищевой промышленности.",
        image: getMemberPathById(1019),
        jobExp: "Юрист ОсОО «Кондитерский Дом «Куликовский», а также арбитр Международного Третейского Суда при Торгово-Промышленной Палате КР. \n Более 16 лет общего опыта работы в сфере консалтинга, страхования, пищевой промышленности. Имеет опыт работы в крупных компаниях, являющихся ведущими в своих отраслях, таких как Кондитерский Дом «Куликовский», Jubilee Insurance Company Kyrgyzstan, East Star Capital. \n Обладает практическим опытом юридического сопровождения сделок по слияниям и поглощениям в горнорудной области с участием иностранных инвесторов, опыт проведения комплексной правовой проверки (Legal Due Diligence) в горнорудной отрасли, финансово-кредитных организаций, а также частных образовательных учреждений. \n Имеет солидный опыт представительства в судебных органах по гражданско-правовым делам. \n Является опытным специалистом в страховании, с фокусом на страховании жизни, включая, накопительное страхование.",
        edu: "Кыргызско-Российский Славянский Университет. Юридический факультет. Специализация: Гражданское право. \n Палата налоговых консультантов: налогообложение. \n Объединение бухгалтеров и аудиторов: бухгалтерский учет.",
        competence:
            "Корпоративное право; \n Договорное право; \n Налоговое право;  \n Страхование жизни, включая накопительное страхование жизни; \n Инвестиционные сделки; Сделки по слияниям и поглощениям; \n Внешнеэкономические сделки; \n Право интеллектуальной собственности; \n Комплексная правовая поддержка (Legal Due Diligence).",
        sertif: "",
    },
    {
        id: "20",
        name: "Азамат Акшамов",
        annotation:
            "Более семнадцати лет профессионального опыта в банковской сфере и шесть лет профессионального опыта в пищевой промышленности.",
        image: getMemberPathById(1020),
        jobExp: "Более семнадцати лет профессионального опыта в банковской сфере и шесть лет профессионального опыта в пищевой промышленности. \n С 2007 по 2008 год специалист сектора кредитования МСБ и Агросектора ЗАО «БТА» Банк; \n С 2007 по 2010 год специалист сектора кредитования МСБ и Агросектора ОАО «АТФ» Банк; \n С 2010 по 2013 год старший кредитный специалист ЗАО Банк «Бай-Тушум»; \n С 2013 по 2016 год аналитик сектора анализа и отчетности Кредитного Управления ЗАО Банк «Бай-Тушум»; \n С 2016 по 2018 год Риск-менеджер ЗАО Банк «Бай-Тушум»; \n С 2018 по 2021 год руководитель Сектора Управления финансовыми рисками ОАО Банк «Бай-Тушум»; \n С 2021 по настоящее время Финансовый менеджер ОсОО МКК «МБулак».",
        edu: "Кыргызский Национальный Университет имени Жусупа Баласагына, специальность: дипломированный специалист «Финансы и кредит» (2006); \n Кыргызский Государственный Технический Университет имени Исхака Раззакова, специальность «Инженер-технолог бродильных производств и виноделия».",
        competence:
            "Компетенции; \n Финансы; \n Кредитование; \n Риск-менеджмент; \n Стратегическое планирование.",
        sertif: "",
    },
];

export default membersData;
// «»
