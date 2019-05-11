import { PLAY_TOPIC, RESET_ATTEMPS, SELECT_TOPIC } from './RecordActionsType';

const initialState = {
    attemps: 3,
    selectedTopic: 0,
    topics: {
        0: {
            selected: false,
            background: 'work.jpeg',
            name: 'Work',
            duration: '10',
            levels: {
                "level-2": ["9.Ou travaillez vous (WORK).mp3", "9a.Depuis combien de temps est-ce que vous travaillez a la Banque (WORK).mp3", "9b.Habitez-vous loin de votre travail (WORK).mp3", "9b1.Comment vous rendez-vous a votre travail (WORK).mp3", "9c.Quel est votre travail et quel poste occupez-vous, Quelle est votre role (WORK).mp3", "9d.Combien de temps ca prend pour vous rendre et venir au travail (WORK).mp3", "9d.Quels sont vos horaires de travail (WORK).mp3", "10.A quelle heure arrivez-vous au travail le matin (WORK).mp3", "11.A quelle heure partez-vous le soir (WORK).mp3", "12.A quel etage est votre bureau (WORK).mp3", "13.Si je veux vous appeler au bureau, quel est votre numero de telephone (WORK).mp3"],
                "level-4": ["1.Comment vous appelez-vous.mp3", "2.Pouvez-vous vous presenter.mp3", "3.Ou avez-vous appris votre francais avant d'arriver a la Banque.mp3", "5.Est-ce que c'est la premiere fois que vous avez une evaluation dans votre langue seconde.mp3", "6.Pourriez-vous me donner le titre de votre poste actuel.mp3", "7.Depuis combien de temps est-ce que vous travaillez a la Banque.mp3", "8.Preferez-vous travailler seul(e) ou en equipe.mp3", "9.Quelles sont vos taches principales a votre travail et pourriez-vous les dwcrire.mp3", "10.Trouvez-vous parfois que votre travail est stressant.mp3", "11.Pourquoi avez-vous choisi de venir travailler ici.mp3", "12.Quels problemes avez-vous rencontres ou quels succes avez vous realises lorsque vous etiez a ce poste-la.mp3", "13.Selon vous, quel aspect de votre travail considerez-vous le plus interessant et le plus complexe.mp3", "14.Votresuperviseur(e)vientvousvoiretvousdemandedeluifairequelquessuggestionsconcernantleschangementsquintldnsvtrsctn,Qllssrntvssggstns.mp3", "15.Si vous pouviez changer une chose dans votre environnement de travail, qu'est-ce que vous changeriez.mp3", "16.Si votre superviseur(e) vous demandait de preparer un atelier relie a votre travail, quel(s) sujet(s) vous interesserait.mp3"],
                "level-6": ["1.Comment vous appelez-vous.mp3", "2.Pouvez-vous vous presenter.mp3", "2a.Selon vous, qu'est-ce que vous trouvez le plus interessant dans votre travail.mp3", "3.Comment avez-vous appris votre francais avant d'arriver a la Banque, Avez-vous l'occasion d'en parler souvent.mp3", "4.Est-ce que vous pourriez m'expliquer quelques-unes de vos taches.mp3", "4b.Avant de travailler a la Banque du Canada, ou est-ce que vous travailliez.mp3", "5.Depuis exactement combien de temps est-ce que vous travaillez a la Banque du Canada.mp3", "6.De facon generale, est-ce que vous preferez le travail individuel ou en equipe.mp3", "7.Trouvez-vous parfois votre travail stressant, Si oui, quels sont les moments ou vous trouvez qu'il y a plus de tension.mp3", "8.Ou avez-vous fait vos etudes universitaires, Quelle discipline avez-vous choisi.mp3", "9.Vous travaillez presentement a Ottawa. Si on vous offrait un poste equivalent a Toronto ouaMontreal,quelleseraitvotredecision.mp3", "10.Comment procedez-vous pour effectuer une analyse ou une recherche, Quelles etapes suivez-vous.mp3", "11.Avez-vousdejaprisunedecisionquevousconsiderezjustifieeetsuiteacettedecision,vosdvzdefndrvtrpstnfcavtrsprvsr(),Dnnz-mncsprtq.mp3", "12.Pouvez-vous me parler d'une de vos experiences de travail.mp3", "14.Qu'est-ce qui vous interesse le plus parmi toutes les taches que vous accomplissez.mp3", "15.Voilamaintenantplusieursmoisquevoustravaillezavotreposte,Vousvousrendezcomptequevousfaitesplusd'heuresqprwvpndntvs4jrsdtrvlprsmn,.mp3"],
            }
        },
        1: {
            selected: false,
            background: 'life.jpeg',
            name: 'Life',
            duration: '10',
            levels: {
                "level-2": ["1.Comment vous appelez-vous (LIFE).mp3", "2.Pouvez-vous vous presenter (LIFE).mp3", "4.Quelle est votre saison preferee, Pourquoi (LIFE).mp3", "5.Avez-vous fait un voyage recemment, Ou etes-vous alle(e) (LIFE).mp3", "5a.Aimez-vous voyager (LIFE).mp3", "5c.Aurez-vous des vacances cette annee (LIFE).mp3", "6.Avez-vous une voiture (LIFE).mp3", "6a.De quelle couleur est votre voiture.(LIFE)wav.mp3", "7.Avez-vous un chat ou un chien (LIFE).mp3", "8.Comment s’appelle votre chat ou chien (LIFE).mp3", "8b.Est-ce que vous habitez une maison ou un appartement (LIFE).mp3"],
            }
        }
    }
}

export default function recordReducer(state = initialState, action) {
    switch (action.type) {
        case PLAY_TOPIC:
            return {
                ...state,
                attemps: state.attemps - 1
            }
        case SELECT_TOPIC:
            return {
                ...state,
                selectedTopic: action.payload,
                topics: Object.keys(state.topics).map((topic) => {
                    let topicToEdit = state.topics[topic];
                    topicToEdit.selected = topic == action.payload;
                    return topicToEdit;
                })
            }
        case RESET_ATTEMPS:
            return {
                ...state,
                attemps: 3
            }
        default: 
            return state;
    }
}