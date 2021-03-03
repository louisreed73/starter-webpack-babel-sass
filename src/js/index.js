
import "../scss/estilo.scss";

console.log("Webpack Bundle!!!!");

let cap = (st) => {
    return st[0].toUpperCase() + st.substring(1)
}

let resultado = "adios" |> cap;

console.log(resultado);
