let Monty_text =
    [
        "ARTHUR: Old WOMAN!",
		"DENNIS: Man!",
        "ARTHUR: Man, sorry. What knight lives in that castle over there?",
        "DENNIS: I am thirty seven.",
        "ARTHUR: What?",
        "DENNIS: I am thirty seven -- I m not old!",
        "ARTHUR: Well, I can t just call you Man.",
        "DENNIS: Well, you could say  DENNIS .",
        "ARTHUR: Well, I didn t know you were called DENNIS.",
        "DENNIS: Well, you didn t bother to find out, did you?",
        "ARTHUR: I did say sorry about the  old WOMAN,  but from the behind you looked--",
        "DENNIS: What I object to is you automatically treat me like an inferior!",
        "ARTHUR: Well, I AM king...",
        "DENNIS: Oh king, eh, very nice. An  how d you get that, eh? By exploitin  the workers -- by  angin  on to outdated imperialist dogma which perpetuates the economic an  social differences in our society! ....If there s ever going to be any progress--",
        "WOMAN: DENNIS, there s some lovely filth down here. Oh -- how d you do?",
        "ARTHUR: How do you do, good lady. I am ARTHUR, King of the Britons. Whose castle is that?",
        "WOMAN: King of the who?",
        "ARTHUR: The Britons.",
        "WOMAN: Who are the Britons?!",
        "ARTHUR: Well, we all are. we re all Britons and I am your king.",
        "WOMAN: I didn t know we had a king. I thought we were an autonomous collective.",
        "DENNIS: You re fooling yourself. We re living in a dictatorship. ..... A self-perpetuating autocracy in which the working classes--",
        "WOMAN: Oh there you go, bringing class into it again.",
        "DENNIS: That s what it s all about if only people would--",
        "ARTHUR: Please, please good people. I am in haste. Who lives in that castle?",
        "WOMAN: No one lives there.",
        "ARTHUR: Then who is your lord?",
        "WOMAN: We don t have a lord.",
        "ARTHUR: What?",
        "DENNIS: I told you. We re an anarcho-syndicalist commune. We take it in turns to act as a sort of executive officer for the week.",
        "ARTHUR: Yes.",
        "DENNIS: But all the decisions of that officer have to be ratified at a special biweekly meeting.",
        "ARTHUR: Yes, I see.",
        "DENNIS: By a simple majority in the case of purely internal affairs,--",
        "ARTHUR: Be quiet!",
        "DENNIS: --but by a two-thirds majority in the case of more--",
        "ARTHUR: Be quiet! I order you to be quiet!",
        "WOMAN: Order, eh -- who does he think he is?",
        "ARTHUR: I am your king!",
        "WOMAN: Well, I didn t vote for you.",
        "ARTHUR: You don t vote for kings.",
        "WOMAN: Well,  ow did you become king then?",
        "ARTHUR: The Lady of the Lake, [angels sing] her arm clad in the purest shimmering samite, held aloft Excalibur from the bosom of the water signifying by Divine Providence that I, ARTHUR, was to carry Excalibur. [singing stops] That is why I am your king!",
        "DENNIS: Listen -- strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.",
        "ARTHUR: Be quiet!",
        "DENNIS: Well you can t expect to wield supreme executive power just  cause some watery tart threw a sword at you!",
        "ARTHUR: Shut up!",
        "DENNIS: I mean, if I went around sayin  I was an empereror just because some moistened bink had lobbed a scimitar at me they d put me away!",
        "ARTHUR: Shut up! Will you shut up!",
        "DENNIS: Ah, now we see the violence inherent in the system.",
        "ARTHUR: Shut up!",
        "DENNIS: Oh! Come and see the violence inherent in the system! --- HELP! HELP! I m being repressed!",
        "ARTHUR: Bloody peasant!",
        "DENNIS: Oh, what a give away. Did you here that, did you here that, eh?.... That s what I m on about -- did you see him repressing me, you saw it didn t you?"];


var current_index = 0;
var max_len = Monty_text.length - 1;

function get_line() {
    let line = Monty_text[current_index];
    if (current_index > max_len) {
        current_index = 0;
    }
    else {
        current_index += 1;
    }
    return line;

}

function Get_next() {
    line = get_line();
    //speech part will go here:
    console.log(line);
    element = document.getElementById("first-paragraph");
    element.innerHTML = line;

}