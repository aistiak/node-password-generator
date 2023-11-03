function passGen(params) {

    const {
        number = 2,
        special = 2,
        capital = 2,
        small = 2
    } = params || {}

    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smalls = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specials = "!@#$%^&*(){}[]";

    let password = ""

    for (let i = 0; i < small; i += 1) {
        const idx = Math.floor(Math.random() * 25);
        password += smalls[idx]
    }
    // console.log({password})
    for (let i = 0; i < capital; i += 1) {
        const idx = Math.floor(Math.random() * 25);
        password += capitals[idx]
    }
    // console.log({password})
    for (let i = 0; i < number; i += 1) {
        const idx = Math.floor(Math.random() * 9);
        password += numbers[idx]
    }
    // console.log({password})
    for (let i = 0; i < special; i += 1) {
        const idx = Math.floor(Math.random() * 12);
        password += specials[idx]
    }

    return password
}


export default passGen;