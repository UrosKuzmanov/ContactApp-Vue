import { createStore } from "vuex";




const store = createStore({
    state() {
        return {
            contacts: [
                {
                    "avatar": "https://robohash.org/omnisquiaillum.png?size=100x100&set=set1",
                    "name": "Stevy Rowles",
                    "phone": "(780) 9066575",
                    "email": "srowles3@myspace.com",
                    "address": "47 David Junction",
                    "rel": "friend",
                    "id": "4"
                },
                {
                    "avatar": "https://robohash.org/eosquisdolore.png?size=100x100&set=set1",
                    "name": "Kore Haug",
                    "phone": "(115) 9050694",
                    "email": "khaug4@youtu.be",
                    "address": "9 Village Center",
                    "rel": "friend",
                    "id": "5"
                },
                {
                    "avatar": "https://robohash.org/asperioresvoluptatemet.png?size=100x100&set=set1",
                    "name": "Ricki Roman",
                    "phone": "(772) 7562243",
                    "email": "rroman5@deviantart.com",
                    "address": "19557 Hanover Parkway",
                    "rel": "Friend",
                    "id": "6"
                },
                {
                    "avatar": "https://robohash.org/nameiussunt.png?size=100x100&set=set1",
                    "name": "Agathe Kneel",
                    "phone": "(119) 1487209",
                    "email": "akneel6@surveymonkey.com",
                    "address": "48 Declaration Alley",
                    "rel": "Friend",
                    "id": "7"
                },
                {
                    "avatar": "https://robohash.org/dignissimosremut.png?size=100x100&set=set1",
                    "name": "Eugenius Darbishire",
                    "phone": "(303) 7387483",
                    "email": "edarbishire7@wisc.edu",
                    "address": "8 Bluejay Alley",
                    "rel": "Work",
                    "id": "8"
                },
                {
                    "avatar": "https://robohash.org/remenimculpa.png?size=100x100&set=set1",
                    "name": "Lauri Nellen",
                    "phone": "(850) 5889511",
                    "email": "lnellen8@google.es",
                    "address": "5851 Reindahl Pass",
                    "rel": "Friend",
                    "id": "9"
                },
                {
                    "avatar": "https://robohash.org/sedassumendamolestiae.png?size=100x100&set=set1",
                    "name": "Cirilo Piesing",
                    "phone": "(817) 1094313",
                    "email": "cpiesing9@webs.com",
                    "address": "6187 Green Ridge Circle",
                    "rel": "Family",
                    "id": "10"
                },
                {
                    "avatar": "https://robohash.org/laborummollitiaatque.png?size=100x100&set=set1",
                    "name": "Iona Mc Giffin",
                    "phone": "(550) 4599203",
                    "email": "imca@usda.gov",
                    "address": "850 Summit Park",
                    "rel": "Friend",
                    "id": "11"
                },
                {
                    "avatar": "https://robohash.org/voluptatemetrepellendus.png?size=100x100&set=set1",
                    "name": "Peter Gotcliff",
                    "phone": "(335) 6826453",
                    "email": "pgotcliffb@bandcamp.com",
                    "address": "38717 Green Ridge Pass",
                    "rel": "Friend",
                    "id": "12"
                },
                {
                    "avatar": "https://robohash.org/recusandaequaeratut.png?size=100x100&set=set1",
                    "name": "Finlay Gouley",
                    "phone": "(143) 2513036",
                    "email": "fgouleyc@163.com",
                    "address": "83 Lyons Trail",
                    "rel": "Family",
                    "id": "13"
                },
                {
                    "avatar": "https://robohash.org/velitasperioresconsequatur.png?size=100x100&set=set1",
                    "name": "Pammy Garley",
                    "phone": "(337) 6584304",
                    "email": "pgarleyd@indiegogo.com",
                    "address": "140 Gina Court",
                    "rel": "Work",
                    "id": "14"
                },
                {
                    "avatar": "https://robohash.org/repellendusfacererecusandae.png?size=100x100&set=set1",
                    "name": "Clarita Pauwel",
                    "phone": "(665) 3176840",
                    "email": "cpauwele@gizmodo.com",
                    "address": "369 Blaine Center",
                    "rel": "Friend",
                    "id": "15"
                },
                {
                    "avatar": "https://robohash.org/remquiexcepturi.png?size=100x100&set=set1",
                    "name": "Maureen Carville",
                    "phone": "(354) 5892086",
                    "email": "mcarvillef@slashdot.org",
                    "address": "84208 Kingsford Place",
                    "rel": "Friend",
                    "id": "16"
                },
                {
                    "avatar": "https://robohash.org/quinesciuntadipisci.png?size=100x100&set=set1",
                    "name": "Matty Doogan",
                    "phone": "(596) 7712356",
                    "email": "mdoogang@is.gd",
                    "address": "817 Melrose Terrace",
                    "rel": "friend",
                    "id": "17"
                },
                {
                    "avatar": "https://robohash.org/estautarchitecto.png?size=100x100&set=set1",
                    "name": "Evaleen Keher",
                    "phone": "(460) 2630556",
                    "email": "ekeherh@ustream.tv",
                    "address": "82 Forest Park",
                    "rel": "Friend",
                    "id": "18"
                },
                {
                    "avatar": "https://robohash.org/quaeratdoloremquequos.png?size=100x100&set=set1",
                    "name": "Berget Tenby",
                    "phone": "(963) 1332192",
                    "email": "btenbyi@goo.gl",
                    "address": "35237 Jenifer Drive",
                    "rel": "Family",
                    "id": "19"
                },
                {
                    "avatar": "https://robohash.org/eumadipiscierror.png?size=100x100&set=set1",
                    "name": "Regen Langstone",
                    "phone": "(405) 9865471",
                    "email": "rlangstonej@netscape.com",
                    "address": "268 Bonner Road",
                    "rel": "Work",
                    "id": "20"
                }
            ]



        }
    },
    mutations: {
        saveNewItem(state, args) {
            state.contacts.push(args)
            console.log(state.contacts)
        },
        updataItem(state, args) {
            for (let contact of state.contacts) {
                if (contact.id == args.id) {
                    let index = state.contacts.indexOf(contact)
                    state.contacts[index] = args
                    break
                }
            }
        },
        deleteItem(state, args) {
            for (let contact of state.contacts) {
                if (contact.id == args) {
                    let index = state.contacts.indexOf(contact)
                    state.contacts.splice(index, 1)
                    break
                }
            }
        },

    },
    actions: {
        saveNewItem(context, args) {
            const newItem = {
                ...args,
                id:Math.random().toString(36).substring(7)
            }

            context.commit('saveNewItem', newItem)
        },
        updataItem(context, args) {
            const updateItem = args
            context.commit('updataItem', updateItem)
        },
        deleteItem(context, args) {
            const delereId = args
            context.commit('deleteItem', delereId)
        }

    },


    getters: {
        showAllContacts(state) {
            return state.contacts.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
        },
        showContactItem: (state) => (id) => {
            return state.contacts.filter(contact => contact.id == id)[0]

        }


    }
})
export default store