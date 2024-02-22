const calculateExtraCashback = (clv) => {

}

const getNumberOfTransaction = (user) => {
    return 1;
}

const getUserLifetime = (user) => {
    return 1;
}

const getRevenue = (amt, gsgComm, customerComm) => {
    const gsgRevenue = amt/100 * gsgComm;
    const customerRevenue = gsgRevenue/100 * customerComm;
    return gsgRevenue - customerRevenue
}

const calculateClv = (payload) => {
    return (getUserLifetime(payload.user) * getNumberOfTransaction(payload.user) * getRevenue(payload.val, payload.gsgComm, payload.customerComm));
 }

const evaluateRules = (payload) => {

}
 
export { calculateClv, evaluateRules }