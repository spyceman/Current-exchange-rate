async function getCurrency() {
let a = await fetch('https://www.nbrb.by/api/exrates/rates?periodicity=0');
let b = await a.json();
let main = document.querySelector('.main')
let d = document.createElement('div');
d.textContent = ` Today ${new Intl.DateTimeFormat().format(new Date)}`
main.prepend(d);
b.forEach(v => {
    let a = document.createElement('div');
    a.textContent = `${v.Cur_Name} - ${v.Cur_OfficialRate}`
    main.append(a);
});
}
getCurrency()