export enum TIER {
    NONE = "none",
    BRONZE = "bronze",
    SILVER = "silver",
    GOLD = "gold",
    PLATINUM = "platinum:"
}

export enum REMUNERATIONTYPE {
    PERCENTAGE = "percentage",
    FIXED = "fixed"
}

export const user = {
    id: "akshat0047",
    name: "Akshat",
    email: "pande.akshat21@gmail.com",
    tier: TIER.NONE,
    subscribed: false,
    fav_brands: false,
    dp: "akshat",
    clv: 0
}

const payload = {
    user: "akshat0047",
    retailerId: "adidas",
    val: 100,
    gsgComm: 20,
    customerComm: 50,
    type: REMUNERATIONTYPE.PERCENTAGE
}

export const ledgers = {}

export const retailers = [
    {
        id: "justeat",
        name: "Just Eat",
        cover: "./img1",
        desc: "xyz",
        gsgComm: 50,
        customerComm: 50,
        type: REMUNERATIONTYPE.PERCENTAGE
    },
    {
        id: "feltrinelli",
        name: "Feltrinelli",
        cover: "./img2",
        desc: "xyz",
        gsgComm: 40,
        customerComm: 20,
        type: REMUNERATIONTYPE.PERCENTAGE
    },
    {
        id: "degustabox",
        name: "Degustabox",
        cover: "./img3",
        desc: "xyz",
        gsgComm: 10,
        customerComm: 50,
        type: REMUNERATIONTYPE.PERCENTAGE
    },
    {
        id: "itaairways",
        name: "ITA Airways",
        cover: "./img4",
        desc: "xyz",
        gsgComm: 30,
        customerComm: 10,
        type: REMUNERATIONTYPE.PERCENTAGE
    },
    {
        id: "farmae",
        name: "Farmae",
        cover: "./img5",
        desc: "xyz",
        gsgComm: 30,
        customerComm: 20,
        type: REMUNERATIONTYPE.PERCENTAGE
    },
    {
        id: "strolli",
        name: "Strolli",
        cover: "./img6",
        desc: "xyz",
        gsgComm: 50,
        customerComm: 15,
        type: REMUNERATIONTYPE.PERCENTAGE
    },
    {
        id: "vistaprint",
        name: "Vistaprint",
        cover: "./img7",
        desc: "xyz",
        gsgComm: 20,
        customerComm: 70,
        type: REMUNERATIONTYPE.PERCENTAGE
    }
]