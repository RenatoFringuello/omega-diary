// {exerciseName : "", sets:, reps:, isChecked:false },
const workouts = [
    {
        icon: "🦵", group: "leg", 
        exercises : [
            {exerciseName : "leg curl in piedi", sets:3, reps:10, isChecked:false },
            {exerciseName : "leg curl seduto", sets:3, reps:10, isChecked:false },
            {exerciseName : "leg curl sdraiato", sets:2, reps:12, isChecked:false },
            {exerciseName : "leg ext in stripping", sets:3, reps:"20 + 15 + 10", isChecked:false },
            {exerciseName : "squat al multipower", sets:3, reps:10, isChecked:false },
            {exerciseName : "affondi inversi + pressa verticale piedi paralleli al bacino", sets:3, reps:10, isChecked:false },
            {exerciseName : "calf in piedi + seduto ", sets:3, reps:"20 + 20", isChecked:false },
        ],
        exercisesH : [
            {exerciseName : "panca piana bilanciere", sets:4, reps:"6 con negativa da 3/4 sec", rest:100, isChecked:false },
            {exerciseName : "rematore bilanciere p. prona 45° larghezza spalle", sets:4, reps:"6 con negativa da 3/4 sec", rest:100, isChecked:false },
            {exerciseName : "military press nel rack", sets:4, reps:"6 con negativa da 3/4 sec", rest:100, isChecked:false },
            {exerciseName : "curl bilanciere in piedi", sets:4, reps:"6 con negativa da 3/4 sec", rest:100, isChecked:false },
            {exerciseName : "panca piana p. stretta bilanciere", sets:4, reps:"6 con negativa da 3/4 sec", rest:100, isChecked:false },
        ]
    },
    {
        icon: "🔙", group: "back", 
        exercises : [
            {exerciseName : "dorsy bar", sets:5, reps:8, isChecked:false },
            {exerciseName : "dorsy bar inclinata", sets:3, reps:"12 / 10 / 8", isChecked:false },
            {exerciseName : "row bench (panca accanto alla dorsy)", sets:3, reps:10, isChecked:false },
            {exerciseName : "high row presa larga in stripping", sets:3, reps:"10 + 10 + 10", isChecked:false },
            {exerciseName : "lat machine avanti presa stretta", sets:4, reps:10, isChecked:false },
            {exerciseName : "low row", sets:4, reps:10, isChecked:false },
        ],
        exercisesH : [
            {exerciseName : "squat bilanciere", sets:4, reps:"6 con negativa da 3/4 sec", rest:100, isChecked:false },
            {exerciseName : "stacchi rumeni bilanciere", sets:4, reps:"6 con negativa da 3/4 sec", rest:100, isChecked:false },
            {exerciseName : "leg press 45° piedi stretti", sets:4, reps:"6 con negativa da 3/4 sec", rest:100, isChecked:false },
            {exerciseName : "leg curl sdraiato", sets:4, reps:"6 con negativa da 3/4 sec", rest:100, isChecked:false },
            {exerciseName : "calf in piedi", sets:3, reps:"8 con negativa da 3/4 sec", rest:60, isChecked:false },
            {exerciseName : "calf seduto", sets:3, reps:"8 con negativa da 3/4 sec", rest:60, isChecked:false },
        ]
    },
    {
        icon: "💣", group: "shoulder", 
        exercises : [
            {exerciseName : "alzate laterali al multy flight", sets:2, reps:100, isChecked:false },
            {exerciseName : "alzate laterali", sets:3, reps:10, isChecked:false },
            {exerciseName : "deltoid press in stripping", sets:4, reps:"10 + 10 + 10", isChecked:false },
            {exerciseName : "lento avanti al multipower", sets:3, reps:10, isChecked:false },
            {exerciseName : "alzate frontali bilanciere", sets:3, reps:12, isChecked:false },
            {exerciseName : "posteriori pack back", sets:4, reps:"10 con 2 sec in iosometria", isChecked:false },
        ],
        exercisesH : [
            {exerciseName : "chest press spinta verso l'alto", sets:3, reps:"5 in slow neg,\nscali 20% + 5 in slow pos\nscali 20% + cedimento", rest:90, isChecked:false },
            {exerciseName : "croci manubri 45°", sets:3, reps:"10", rest:60, isChecked:false },
            {exerciseName : "distensioni manubri panca piana", sets:3, reps:"3 da (10 + rest pause 20 sec dove scali peso)", rest:90, isChecked:false },
            {exerciseName : "croci alla pec fly ", sets:3, reps:"10 + 10 + 10", rest:100, isChecked:false },
            {exerciseName : "curl manubri panca 45° + hammer curl in piedi", sets:4, reps:"8 + rest pause 20 sec + 8", rest:90, isChecked:false },
            {exerciseName : "curl bil. Z in piedi set 21", sets:3, reps:"7 corto basso + 7 corto alto + 7 completo", rest:60, isChecked:false },
            {exerciseName : "french press panca inclinata + spinte strette bil .Z", sets:3, reps:"10 + 10 stesso peso", rest:90, isChecked:false },
            {exerciseName : "dips machine p.stretta", sets:3, reps:"10 + 10 + 10", rest:90, isChecked:false },
        ]
    },
    {
        icon: "💪", group: "bi & tri", 
        exercises : [
            {exerciseName : "curl cavo basso con sbarretta", sets:3, reps:"10 + 10 + 10", isChecked:false },
            {exerciseName : "french press manubri", sets:3, reps:"10 + 10 + 10", isChecked:false },
            {exerciseName : "curl bilanciere dritto", sets:3, reps:"7/21", isChecked:false },
            {exerciseName : "ercolina alla corda", sets:3, reps:"20 con 2 sec in max extensione", isChecked:false },
            {exerciseName : "curl martello", sets:3, reps:12, isChecked:false },
            {exerciseName : "triceps machine", sets:3, reps:12, isChecked:false },
        ],
        exercisesH : [
            {exerciseName : "squat multipower", sets:3, reps:"7 + 2 in slow neg,\nscali 20% + 7 + 2 in slow pos\nscali 20% + cedimento", rest:120, isChecked:false },
            {exerciseName : "leg press 45° piedi larghi accosciata completa", sets:3, reps:"12 con 2 sec in bottom", rest:90, isChecked:false },
            {exerciseName : "reverse hack squat con aumento di carico", sets:4, reps:"12 / 10 / 8 / 6", rest:90, isChecked:false },
            {exerciseName : "leg extension", sets:3, reps:"10 + 10 + 10", rest:90, isChecked:false },
            {exerciseName : "leg curl sdraiato", sets:4, reps:"2 da (8 + rest 10 sec dove scali peso)\n5/6 + rest 10 sec scali peso\n3", rest:90, isChecked:false },
            {exerciseName : "affondi max falcata liberi senza peso", sets:1, reps:"100 passi", rest:90, isChecked:false },
            {exerciseName : "calf seduto + calf in piedi", sets:5, reps:"15 + 15", rest:30, isChecked:false },
        ]
    },
    {
        icon: "🧰", group: "chest", 
        exercises : [
            {exerciseName : "chest press inclinata (macchinario nuovo)", sets:4, reps:"10 + 10 + 10", isChecked:false },
            {exerciseName : "panca inclinata bilanciere", sets:3, reps:12, isChecked:false },
            {exerciseName : "panca inclinata manubri 38°", sets:4, reps:12, isChecked:false },
            {exerciseName : "croci pack back", sets:3, reps:"10 con 3 sec in chiusura", isChecked:false },
            {exerciseName : "croci ai cavi alti", sets:3, reps:20, isChecked:false },
            {exerciseName : "push up a cedimento", sets:2, reps:"max", isChecked:false },
        ],
        exercisesH : [
            {exerciseName : "rematore t bar p.stretta con aumento di carico", sets:4, reps:"12 / 10 / 8 / 6", rest:90, isChecked:false },
            {exerciseName : "lat avanti p. larga + p. media + p.stretta inversa", sets:3, reps:"(10 rest 10 sec) cad.", rest:90, isChecked:false },
            {exerciseName : "rematore singolo manubrio", sets:3, reps:"10 + 3 forzate con carico più alto + cedimento con carico iniziale", rest:90, isChecked:false },
            {exerciseName : "pulley basso con triangolo", sets:3, reps:"10 + 10 + 10", rest:90, isChecked:false },
            {exerciseName : "deltoid machine", sets:4, reps:"5 in slow neg,\nscali 20% + 5 in slow pos\nscali 20% + cedimento", rest:90, isChecked:false },
            {exerciseName : "alzate laterali + frontali", sets:3, reps:"10 + rest 10 sec + 10", rest:90, isChecked:false },
            {exerciseName : "alzate laterali cavo basso", sets:3, reps:"10 + 10 + 10", rest:60, isChecked:false },
            {exerciseName : "alzate posteriori manubri", sets:3, reps:"10", rest:60, isChecked:false },
            {exerciseName : "face pull con corda gomiti alti", sets:3, reps:"10", rest:60, isChecked:false },
        ]
    }
]