const partecipanti = [
    { id: 1, nome: "Luca", cognome: "Rossi", email: "luca.rossi@example.com", numero: "1234567890", codiceFiscale: "RSSLCU85M01H501Z" },
    { id: 2, nome: "Giulia", cognome: "Bianchi", email: "giulia.bianchi@example.com", numero: "0987654321", codiceFiscale: "BNCHGL90A41H501X" },
    { id: 3, nome: "Marco", cognome: "Verdi", email: "marco.verdi@example.com", numero: "1122334455", codiceFiscale: "VRDMRC75M01H501Y" },
    { id: 4, nome: "Sara", cognome: "Neri", email: "sara.neri@example.com", numero: "2233445566", codiceFiscale: "NRISRA87L51H501F" },
    { id: 5, nome: "Alessandro", cognome: "Conti", email: "alessandro.conti@example.com", numero: "3344556677", codiceFiscale: "CNTLSN72A41H501E" },
    { id: 6, nome: "Francesca", cognome: "Galli", email: "francesca.galli@example.com", numero: "4455667788", codiceFiscale: "GLLFNC85L41H501B" },
    { id: 7, nome: "Simone", cognome: "Martini", email: "simone.martini@example.com", numero: "5566778899", codiceFiscale: "MRTSMN78A01H501C" },
    { id: 8, nome: "Elena", cognome: "Lombardi", email: "elena.lombardi@example.com", numero: "6677889900", codiceFiscale: "LMBLNA85M01H501D" },
    { id: 9, nome: "Andrea", cognome: "Ferrari", email: "andrea.ferrari@example.com", numero: "7788990011", codiceFiscale: "FRRNDR91B01H501E" },
    { id: 10, nome: "Chiara", cognome: "Greco", email: "chiara.greco@example.com", numero: "8899001122", codiceFiscale: "GRCCHR85M41H501F" },
    { id: 11, nome: "Matteo", cognome: "Giorgi", email: "matteo.giorgi@example.com", numero: "9900112233", codiceFiscale: "GRGMTE76T01H501G" },
    { id: 12, nome: "Veronica", cognome: "Moretti", email: "veronica.moretti@example.com", numero: "1011122334", codiceFiscale: "MRTVNC85M51H501H" },
    { id: 13, nome: "Federico", cognome: "Ricci", email: "federico.ricci@example.com", numero: "1122334455", codiceFiscale: "RCCFDR80M01H501I" },
    { id: 14, nome: "Giovanni", cognome: "Sarti", email: "giovanni.sarti@example.com", numero: "2233445566", codiceFiscale: "SRTGVN83M01H501J" },
    { id: 15, nome: "Davide", cognome: "Giuliani", email: "davide.giuliani@example.com", numero: "3344556677", codiceFiscale: "GLVDVS90M01H501K" },
    { id: 16, nome: "Anna", cognome: "Zanetti", email: "anna.zanetti@example.com", numero: "4455667788", codiceFiscale: "ZNANNA80A01H501L" },
    { id: 17, nome: "Paolo", cognome: "Rinaldi", email: "paolo.rinaldi@example.com", numero: "5566778899", codiceFiscale: "RNLPLS85M01H501M" },
    { id: 18, nome: "Giuseppe", cognome: "Mazzini", email: "giuseppe.mazzini@example.com", numero: "6677889900", codiceFiscale: "MZZGPP74A01H501N" },
    { id: 19, nome: "Martina", cognome: "D'Angelo", email: "martina.dangelo@example.com", numero: "7788990011", codiceFiscale: "DNGMTN88M01H501O" },
    { id: 20, nome: "Alessia", cognome: "Marini", email: "alessia.marini@example.com", numero: "8899001122", codiceFiscale: "MRNLSS80M01H501P" },
    { id: 21, nome: "Roberto", cognome: "Longo", email: "roberto.longo@example.com", numero: "9900112233", codiceFiscale: "LNGRTB74M01H501Q" },
    { id: 22, nome: "Lucia", cognome: "Siciliano", email: "lucia.siciliano@example.com", numero: "1011122334", codiceFiscale: "SCLLCU87M01H501R" },
    { id: 23, nome: "Enrico", cognome: "Cappello", email: "enrico.cappello@example.com", numero: "1122334455", codiceFiscale: "CPPLNC75M01H501S" },
    { id: 24, nome: "Ilaria", cognome: "Pellegrini", email: "ilaria.pellegrini@example.com", numero: "2233445566", codiceFiscale: "PLLRIR85M01H501T" },
    { id: 25, nome: "Raffaele", cognome: "De Luca", email: "raffaele.deluca@example.com", numero: "3344556677", codiceFiscale: "DLCFRF80M01H501U" },
    { id: 26, nome: "Giovanni", cognome: "Luciano", email: "giovanni.luciano@example.com", numero: "4455667788", codiceFiscale: "LCNGNN81M01H501V" },
    { id: 27, nome: "Francesco", cognome: "Ferrari", email: "francesco.ferrari@example.com", numero: "5566778899", codiceFiscale: "FRNFCN85M01H501W" },
    { id: 28, nome: "Luigi", cognome: "Ricci", email: "luigi.ricci@example.com", numero: "6677889900", codiceFiscale: "RCCLGU82M01H501X" },
    { id: 29, nome: "Simona", cognome: "Gatti", email: "simona.gatti@example.com", numero: "7788990011", codiceFiscale: "GTTSMN83M01H501Y" },
    { id: 30, nome: "Stefano", cognome: "Leone", email: "stefano.leone@example.com", numero: "8899001122", codiceFiscale: "LNSTFN85M01H501Z" },
    { id: 31, nome: "Giorgio", cognome: "Santoro", email: "giorgio.santoro@example.com", numero: "9900112233", codiceFiscale: "SNTGRG72M01H502A" },
    { id: 32, nome: "Martina", cognome: "Caputo", email: "martina.caputo@example.com", numero: "1011122334", codiceFiscale: "CPTMTN79M01H502B" },
    { id: 33, nome: "Nicola", cognome: "Caruso", email: "nicola.caruso@example.com", numero: "1122334455", codiceFiscale: "CRSNCN85M01H502C" },
    { id: 34, nome: "Francesca", cognome: "Tarantino", email: "francesca.tarantino@example.com", numero: "2233445566", codiceFiscale: "TRNFRN88M01H502D" },
    { id: 35, nome: "Luca", cognome: "Delle Fratte", email: "luca.dellefratte@example.com", numero: "3344556677", codiceFiscale: "DLFRLC90M01H502E" },
    { id: 36, nome: "Claudia", cognome: "Rossi", email: "claudia.rossi@example.com", numero: "4455667788", codiceFiscale: "RSSCLD85M01H502F" },
    { id: 37, nome: "Angelo", cognome: "Marino", email: "angelo.marino@example.com", numero: "5566778899", codiceFiscale: "MRNGLA83M01H502G" },
    { id: 38, nome: "Rosa", cognome: "Botticelli", email: "rosa.botticelli@example.com", numero: "6677889900", codiceFiscale: "BTTRSA85M01H502H" },
    { id: 39, nome: "Antonio", cognome: "Savini", email: "antonio.savini@example.com", numero: "7788990011", codiceFiscale: "SVNTON89M01H502I" },
    { id: 40, nome: "Tiziana", cognome: "Lupo", email: "tiziana.lupo@example.com", numero: "8899001122", codiceFiscale: "LPOTZN78M01H502J" },
    { id: 41, nome: "Paola", cognome: "Bianco", email: "paola.bianco@example.com", numero: "9900112233", codiceFiscale: "BNCPLS85M01H502K" },
    { id: 42, nome: "Stefano", cognome: "Marzoli", email: "stefano.marzoli@example.com", numero: "1011122334", codiceFiscale: "MRZSTF85M01H502L" },
    { id: 43, nome: "Cristina", cognome: "Sorrenti", email: "cristina.sorrenti@example.com", numero: "1122334455", codiceFiscale: "SRNCRT82M01H502M" },
    { id: 44, nome: "Antonio", cognome: "Lopez", email: "antonio.lopez@example.com", numero: "2233445566", codiceFiscale: "LPXNTN88M01H502N" },
    { id: 45, nome: "Valentina", cognome: "Guerra", email: "valentina.guerra@example.com", numero: "3344556677", codiceFiscale: "GRRNTN85M01H502O" },
    { id: 46, nome: "Federico", cognome: "Pompili", email: "federico.pompili@example.com", numero: "4455667788", codiceFiscale: "PMPFDR85M01H502P" },
    { id: 47, nome: "Francesco", cognome: "Savino", email: "francesco.savino@example.com", numero: "5566778899", codiceFiscale: "SVNFNC75M01H502Q" },
    { id: 48, nome: "Elena", cognome: "Vinci", email: "elena.vinci@example.com", numero: "6677889900", codiceFiscale: "VCNELN88M01H502R" },
    { id: 49, nome: "Roberta", cognome: "Mancini", email: "roberta.mancini@example.com", numero: "7788990011", codiceFiscale: "MNCDBT83M01H502S" },
    { id: 50, nome: "Giuseppe", cognome: "Luigi", email: "giuseppe.luigi@example.com", numero: "8899001122", codiceFiscale: "LGSPSP87M01H502T" },
]