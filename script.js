

//	    _    _
//     / \  / \
//    /   \/   \      Viper.
//   |  (0)(0)  |    -------
//   |__________|


// exportar cronometro divs 

const stop_div = document.getElementById("div_stop");
const start_div = document.getElementById("div_start");

const minutos_div = document.getElementById("m_div")
const segundos_div = document.getElementById("s_div")
const milisegundos_div = document.getElementById("ms_div")
// botones 
const start = document.getElementById("init")
const detener = document.getElementById("end")
const restart = document.getElementById("restart")
const save = document.getElementById("save_time");

restart.setAttribute('disabled', '');
// establecemos variables de digitos cronometrales

// milisegundos
let ms1 = "00"
// segundos
let s1 = "00"
// minutos
let m1 = "00"

// crear funcion de incremento de cronometro

// algoritmo a usar :

// fase 1

// 1. pasar de string a numero
// 2. incrementar el ms
// 3. al llegar a 99 
// 4. reiniciar cuando llege a 99 y empezar de 0
// 5. cada 100 debe subir un segundo 
// 6. se debe excluir la unidad, por cuestion
// de que son 2 digitos apenas a mostrar

// 1 segundo = 1000ms, si sube de 1ms en 1ms
//


// funcion inicio
start.addEventListener("click", () => {

	start_div.classList.add("unshow")
	stop_div.classList.remove("unshow")



	//funcion detener
	detener.addEventListener("click", () => {
		start_div.classList.remove("unshow")
		stop_div.classList.add("unshow")
		clearInterval(incremento_ms)
		restart.removeAttribute("disabled")
	});

	

	const incremento_ms = setInterval(() => {
		recargar()
		if (ms1 >= 99) {
			ms1 = "00"
			s1 = parseInt(s1) + 1
			s1 = s1.toString().padStart(2, "0")
		} else if (s1 > 59 ) {
			s1 = "00"
			m1 = parseInt(m1) + 1
			m1 = m1.toString().padStart(2, "0")
		}
		 else {
			ms1 = parseInt(ms1) + 1
			ms1 = ms1.toString().padStart(2, "0")
		}
	}, 10);
})


function recargar() {

	minutos_div.innerHTML = `
		<div class="text-5xl" id="m1">${m1}</div>`

	segundos_div.innerHTML = `
		<div class="text-5xl" id="s1">${s1}</div>`

	milisegundos_div.innerHTML = `
		<div class="text-5xl" id="ms1">${ms1}</div>`
}

//funcion reiniciar


restart.addEventListener("click", () => {
		ms1 = "00"
		// segundos
		s1 = "00"
		// minutos
		m1 = "00"
		recargar()
});


// funcion para guardar tiempo (por ahora no funciona, proximamente...)


save.addEventListener("click", () => {
	alert("Funcion disponible en la Update Alpha V.1")
});

recargar()