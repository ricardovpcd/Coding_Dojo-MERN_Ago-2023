const login = (req, res) => {
    /*var objeto = {
        "name": "Ricardo",
        "edad": 30,
        "technologies": ["JS", "HTML", "CSS"]
    };*/

    var lista = [
        {
            "name": "Ricardo",
            "edad": 30,
            "technologies": ["JS", "HTML", "CSS"]
        },
        {
            "name": "Maria",
            "edad": 45,
            "technologies": ["Java", "PHP"]
        },
        {
            "name": "Carlos",
            "edad": 50,
            "technologies": ["Python", "Django"]
        }
    ];

    res.json(lista);
}

const register = (req, res) => {
    res.json("Register");
}

module.exports = {login, register};