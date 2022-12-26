import {v4 as uuid} from 'uuid';

export default {
    state: {
        openedProductID: -1,
        products: [
            {
                id: uuid(),
                name: 'Футболка "Я панк"',
                rating: 4.5,
                votes: 404,
                shortDescription: "Вонючая футболка для настоящих панков",
                longDescription: "Границы ключ переломлен пополам\n" +
                    "А наш батюшка Ленин совсем усоп\n" +
                    "Он разложился на плесень и на липовый мёд\n" +
                    "А перестройка всё идёт и идёт по плану\n" +
                    "И вся грязь превратилась в голый лёд\n" +
                    "И всё идёт по плану\n" +
                    "Всё идёт по плану\n" +
                    "А моя судьба захотела на покой\n" +
                    "Я обещал ей не участвовать в военной игре\n" +
                    "Но на фуражке, на моей, серп и молот, и звезда\n" +
                    "Как это трогательно: серп и молот, и звезда\n" +
                    "Лихой фонарь ожидания мотается\n" +
                    "И всё идёт по плану\n" +
                    "Всё идёт по плану",
                img: "https://storage.vsemayki.ru/images/0/1/1913/1913759/previews/people_7_manshort_front_white_500.jpg",
                author: 'ООО "Моя оборона"',
                characteristics: [
                    {
                        name: 'Материал',
                        value: 'Хлопок'
                    },
                    {
                        name: 'Цвет',
                        value: 'Белый'
                    },
                    {
                        name: 'Производитель',
                        value: 'ООО "Моя оборона"'
                    },
                ]
            },
        ]
    },
    mutations: {
        setOpenedProductID(state, id) {
            state.openedProductID = id;
        }
    },
    actions: {
        setOpenedProductIDAction({ commit }, id) {
            commit('setOpenedProductID', id);
        }
    },
    getters: {},
    namespaced: true,
};
