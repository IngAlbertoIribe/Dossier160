// ==========================================
// CORE.JS - SISTEMA DE EXPEDIENTE DE VIAJE Y VISA
// ==========================================

const cuestionarioBase = [
    { categoria: "PERSONAL", id: "email", pregunta: "E-MAIL:", tip: "Usa un correo al que tengas acceso diario.", tipo: "email" },
    { categoria: "PERSONAL", id: "nombre_nacimiento_combo", pregunta: "NOMBRE COMPLETO Y FECHA DE NACIMIENTO:", tip: "Ingresa tu nombre exactamente como aparece en tu pasaporte y tu fecha de nacimiento.", tipo: "nombre_nacimiento_combo" },
    { categoria: "PERSONAL", id: "lugar_nacionalidad_combo", pregunta: "LUGAR DE NACIMIENTO Y OTRA NACIONALIDAD:", tip: "Verifica tu municipio en tu acta de nacimiento e indica si posees otra nacionalidad.", tipo: "lugar_nacionalidad_combo" },
    { categoria: "PERSONAL", id: "direccion_completa", pregunta: "DIRECCIÓN COMPLETA DE RESIDENCIA ACTUAL:", tip: "Ingresa tu Código Postal para buscar tu colonia.", tipo: "direccion_mx" },
    { categoria: "PERSONAL", id: "contacto_redes_combo", pregunta: "TELÉFONOS, REDES SOCIALES E HISTORIAL DE CONTACTO:", tip: "⚠️ IMPORTANTE: Números donde puedan localizarte, tus usuarios o enlaces exactos.", tipo: "contacto_redes_combo" },
    { categoria: "PERSONAL", id: "propiedades", pregunta: "¿TIENE PROPIEDADES A SU NOMBRE EN SU PAÍS DE ORIGEN?", tip: "Ej. 'Casa propia y 1 vehículo'. Demuestra tus lazos de arraigo.", tipo: "sino_texto" },
    { categoria: "PERSONAL", id: "estado_civil", pregunta: "ESTADO CIVIL:", tip: "Selecciona una opción.", tipo: "select", opciones: ["Soltero(a)", "Casado(a)", "Divorciado(a)", "Viudo(a)", "Unión Libre"] },
    { categoria: "PERSONAL", id: "esposo_combo", pregunta: "INFORMACIÓN DE SU ESPOSO(A) / EX-ESPOSO(A):", tip: "⚠️ OBLIGATORIO: Nombre completo con apellidos, fecha y lugar de nacimiento.", tipo: "esposo_combo" },
    { categoria: "PERSONAL", id: "datos_hijos", pregunta: "¿TIENE HIJOS?", tip: "Si tienes, captura nombres completos y fechas de nacimiento.", tipo: "sino_texto" },
    { categoria: "PERSONAL", id: "historial_previo_eu", pregunta: "¿HA VIAJADO O HA TENIDO VISA DEL PAÍS DESTINO ANTERIORMENTE?", tip: "Selecciona una opción.", tipo: "select", opciones: ["Sí, he viajado o he tenido visa", "No, nunca he ido y es mi primera visa"] },
    { categoria: "PERSONAL", id: "ssn_tax_id", pregunta: "EN EL PAÍS DESTINO ¿CUENTAS CON REGISTRO, SEGURO O ID LOCAL?", tip: "Si respondes Sí, anota el número.", tipo: "sino_texto" },
    { categoria: "PERSONAL", id: "padres_combo", pregunta: "INFORMACIÓN DE SUS PADRES:", tip: "⚠️ OBLIGATORIO: Nombres completos, fechas de nacimiento y ocupación de AMBOS padres.", tipo: "padres_combo" },
    { categoria: "PROFESIONAL", id: "educacion_completa", pregunta: "INFORMACIÓN ACADÉMICA:", tip: "Captura tu nivel, tu especialidad (si aplica) y tus instituciones.", tipo: "educacion_combo" },
    { categoria: "PROFESIONAL", id: "anos_experiencia", pregunta: "¿CUÁNTOS AÑOS DE EXPERIENCIA TIENE EN SU PROFESIÓN/OFICIO?", tip: "Escribe solo el número de años ejerciendo.", tipo: "number" },
    { categoria: "PROFESIONAL", id: "empresa_y_direccion", pregunta: "DATOS DE LA EMPRESA O INSTITUCIÓN ACTUAL:", tip: "Nombre de la empresa/escuela, teléfono y su domicilio completo.", tipo: "empresa_combo" },
    { categoria: "PROFESIONAL", id: "puesto_y_detalles", pregunta: "DETALLES DE SU PUESTO Y ACTIVIDADES:", tip: "Ingresa tu puesto, antigüedad, sueldo bruto y descripción de funciones.", tipo: "puesto_combo" },
    { categoria: "PROFESIONAL", id: "empleos_anteriores", pregunta: "MENCIONE SUS ÚLTIMOS 2 EMPLEOS ANTERIORES:", tip: "Empresa, dirección, tel, cargo, jefe y fechas.", tipo: "textarea" },
    { categoria: "PROFESIONAL", id: "organizaciones", pregunta: "¿PERTENECE A UNA ORGANIZACIÓN SOCIAL O PROFESIONAL?:", tip: "Colegios, sindicatos, clubes, etc.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "plan_viaje_combo", pregunta: "PLAN DE VIAJE AL DESTINO:", tip: "Motivo del viaje, fecha proyectada y días de estancia.", tipo: "plan_viaje_combo" },
    { categoria: "CONSULADO Y VIAJE", id: "logistica_viaje_combo", pregunta: "HOSPEDAJE Y FINANCIAMIENTO DEL VIAJE:", tip: "Lugar donde te hospedarás, quién cubre los gastos y si viajas acompañado.", tipo: "logistica_combo" },
    { categoria: "CONSULADO Y VIAJE", id: "contactos_y_viajes_combo", pregunta: "CONTACTOS EN EL DESTINO Y VIAJES INTERNACIONALES:", tip: "Familiares cercanos, otros familiares y viajes realizados en los últimos 5 años.", tipo: "contactos_combo" },
    { categoria: "CONSULADO Y VIAJE", id: "pasaporte_detalles_combo", pregunta: "DATOS DEL PASAPORTE Y ROBO/EXTRAVÍO:", tip: "Lugar de emisión y si has tenido reportes de pasaporte perdido.", tipo: "pasaporte_combo" },
    { categoria: "CONSULADO Y VIAJE", id: "visitas_anteriores", pregunta: "¿HA ESTADO ALGUNA VEZ EN EL PAÍS DESTINO? (FECHAS):", tip: "Revisa los sellos de tu pasaporte anterior.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "licencia_eu", pregunta: "¿TIENE LICENCIA DE CONDUCIR O ID DEL PAÍS DESTINO?:", tip: "Si tienes, anota el número.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "visas_historial_combo", pregunta: "HISTORIAL DE VISAS E INCONVENIENTES EN EL DESTINO:", tip: "⚠️ IMPORTANTE: Información exacta sobre visas otorgadas o inconvenientes previos.", tipo: "visas_historial_combo" },
    { categoria: "CONSULADO Y VIAJE", id: "seguridad", pregunta: "¿TIENE EXPERIENCIA EN ARMAS DE FUEGO O HA SERVIDO AL EJÉRCITO?:", tip: "Si respondes Sí, detalla tu experiencia.", tipo: "sino_texto" }
];

const PREGUNTAS_A_OMITIR_PRIMERA_VEZ = ['ssn_tax_id', 'visitas_anteriores', 'licencia_eu', 'visas_historial_combo'];
const PREGUNTAS_A_OMITIR_SOLTERO = ['esposo_combo'];

const PASOS_PRE_CUESTIONARIO = 5; 
const PASOS_POST_CUESTIONARIO = 8; 
const TOTAL_PASOS = PASOS_PRE_CUESTIONARIO + cuestionarioBase.length + PASOS_POST_CUESTIONARIO; 

let appData = JSON.parse(localStorage.getItem('datosVisado')) || {
    paso_actual: 0, 
    pais_destino: "Estados Unidos 🇺🇸",
    folio_pasaporte: "", 
    ds160_index: 0, 
    respuestas_ds160: {}, 
    cita_cas: null, 
    cita_entrevista: null
};

function obtenerNombrePaisLimpio(pais) {
    if (!pais) return "";
    return pais.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
}

function formatearTextoPregunta(textoOriginal, paisActual) {
    let paisLimpio = obtenerNombrePaisLimpio(paisActual);
    return textoOriginal
        .replace("DEL PAÍS DESTINO", `DE ${paisLimpio.toUpperCase()}`)
        .replace("EN EL PAÍS DESTINO", `EN ${paisLimpio.toUpperCase()}`)
        .replace("EN PAÍS DESTINO", `EN ${paisLimpio.toUpperCase()}`)
        .replace("PAÍS DESTINO", paisLimpio);
}

function mostrarAlerta(mensaje) {
    let modal = document.getElementById('customModal');
    let acciones = document.getElementById('modalActions');
    document.getElementById('modalMessage').innerText = mensaje;
    if (acciones) {
        acciones.innerHTML = `<button onclick="cerrarModal()">Aceptar</button>`;
    }
    modal.style.display = 'flex';
}

function mostrarConfirmacion(mensaje, funcionAceptar) {
    let modal = document.getElementById('customModal');
    let acciones = document.getElementById('modalActions');
    document.getElementById('modalMessage').innerText = mensaje;
    if (acciones) {
        acciones.innerHTML = `
            <button onclick="${funcionAceptar}(); cerrarModal();" style="background: var(--color-acento, #e53935); color: white; margin-bottom: 8px;">Sí, borrar</button>
            <button onclick="cerrarModal()" class="secondary">No, cancelar</button>
        `;
    }
    modal.style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('customModal').style.display = 'none';
}

function debeOmitirse(idx) {
    if(idx < 0 || idx >= cuestionarioBase.length) return false;
    let q = cuestionarioBase[idx];
    if (appData.respuestas_ds160['historial_previo_eu'] === 'No, nunca he ido y es mi primera visa' && PREGUNTAS_A_OMITIR_PRIMERA_VEZ.includes(q.id)) return true;
    let estadoCivil = appData.respuestas_ds160['estado_civil'];
    if ((estadoCivil === 'Soltero(a)' || estadoCivil === 'Divorciado(a)' || estadoCivil === 'Unión Libre') && PREGUNTAS_A_OMITIR_SOLTERO.includes(q.id)) return true;
    
    if (q.id === 'empleos_anteriores') {
        let datosPuesto = appData.respuestas_ds160['puesto_y_detalles'];
        if(datosPuesto && datosPuesto.startsWith("{")) {
            try {
                let obj = JSON.parse(datosPuesto);
                let antiguedad = parseInt(obj.antiguedad);
                if (!isNaN(antiguedad) && antiguedad >= 5) return true;
            } catch(e){}
        }
    }
    return false;
}

function guardarDato(l, v, p) { 
    appData[l] = v; 
    avanzarPaso(p); 
}

function guardarInputGeneral(l, id, p) { 
    let val = document.getElementById(id).value.trim();
    if(!val) { 
        mostrarAlerta("Por favor, ingresa el dato solicitado."); 
        return; 
    }
    appData[l] = val; 
    avanzarPaso(p); 
}

function avanzarPaso(p) { 
    appData.paso_actual = p; 
    localStorage.setItem('datosVisado', JSON.stringify(appData)); 
    renderScreen(p); 
}

async function buscarCP() {
    let cp = document.getElementById('cp_input').value;
    if(cp.length < 4) return;
    let msg = document.getElementById('msg_estado');
    let sel = document.getElementById('colonia_select');
    
    msg.innerText = "Buscando..."; 
    document.getElementById('direccion_detalles').style.display = 'block';
    
    try {
        let res = await fetch(`https://api.zippopotam.us/mx/${cp}`);
        if(!res.ok) throw new Error();
        let data = await res.json();
        
        sel.innerHTML = ''; 
        data.places.forEach(p => {
            sel.innerHTML += `<option value="${p['place name']}, ${data.places[0].state}">${p['place name']}</option>`;
        });
        
        msg.innerText = `Ubicación: ${data.places[0].state} ✅`; 
        msg.style.color="green";
    } catch(e) { 
        msg.innerText="CP no encontrado."; 
        msg.style.color="red"; 
        sel.innerHTML='<option value="">Manual</option>'; 
    }
}

function renderScreen(pasoForzado = null) {
    let step = pasoForzado !== null ? pasoForzado : appData.paso_actual;
    let html = "";
    
    let progresoReal = step < 5 ? step : (step === 5 ? 5 + appData.ds160_index : 5 + cuestionarioBase.length + (step - 5));
    document.getElementById('progressBar').style.width = ((progresoReal / TOTAL_PASOS) * 100) + "%";

    let paisActual = appData.pais_destino || "el país destino";
    let paisLimpio = obtenerNombrePaisLimpio(paisActual);

    switch(step) {
        case 0: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">✈️</div>
                <h2 style="color: var(--color-primario); margin-top:0; text-align: center;">¡Bienvenido a Dossier160!</h2>
                
                <div class="tip-box">
                    <p style="margin: 0 0 8px 0;"><b>📋 Tu Asistente para Solicitud de Visa y Viajes:</b></p>
                    <p style="margin: 0;">Esta aplicación te ayuda a <b>recolectar, organizar y validar</b> toda la información necesaria para tus formularios de visa y expedientes de viaje.</p>
                </div>

                <div class="form-grid-2">
                    <div class="full-width">
                        <label style="font-weight: bold; display: block; margin-bottom: 8px;">¿A qué país deseas viajar?</label>
                        <select id="selectPaisDestino">
                            <option value="Estados Unidos 🇺🇸" ${appData.pais_destino === "Estados Unidos 🇺🇸" ? "selected":""}>Estados Unidos 🇺🇸</option>
                            <option value="Canadá 🇨🇦" ${appData.pais_destino === "Canadá 🇨🇦" ? "selected":""}>Canadá 🇨🇦</option>
                            <option value="Europa / Espacio Schengen 🇪🇺" ${appData.pais_destino === "Europa / Espacio Schengen 🇪🇺" ? "selected":""}>Europa / Espacio Schengen 🇪🇺</option>
                            <option value="Japón 🇯🇵" ${appData.pais_destino === "Japón 🇯🇵" ? "selected":""}>Japón 🇯🇵</option>
                            <option value="Australia 🇦🇺" ${appData.pais_destino === "Australia 🇦🇺" ? "selected":""}>Australia 🇦🇺</option>
                        </select>
                    </div>
                    <div class="button-group-desktop">
                        <button onclick="guardarPaisInicial()">Iniciar Cuestionario</button>
                    </div>
                </div>
            `; 
            break;

        case 1: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📘</div>
                <h3 style="text-align: center;">Paso 1: Pasaporte</h3>
                <p style="text-align: center; margin-bottom: 20px;">¿Ya cuentas con tu pasaporte vigente para viajar a ${paisActual}?</p>
                <div class="button-group-desktop">
                    <button onclick="avanzarPaso(2)">Sí, ya lo tengo</button>
                    <button onclick="avanzarPaso(3)" class="secondary">No, aún no</button>
                </div>
            `; 
            break;

        case 2: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">✍️</div>
                <h3 style="text-align: center;">¡Excelente!</h3>
                <p style="text-align: center;">Captura el folio de tu pasaporte:</p>
                <input type="text" id="inputFolio" value="${appData.folio_pasaporte || ''}" placeholder="Ej. G-00001" style="text-align: center; max-width: 400px; margin: 15px auto; display: block;">
                <div class="button-group-desktop">
                    <button onclick="guardarInputGeneral('folio_pasaporte', 'inputFolio', 4)">Guardar Folio</button>
                </div>
            `; 
            break;

        case 3: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">⏳</div>
                <h3 style="text-align: center;">Paso Pendiente</h3>
                <p style="text-align: center;">Es indispensable contar con tu pasaporte vigente para cualquier trámite de viaje.</p>
                <div class="agency-box"><strong>🤝 Recomendación:</strong><br>Te sugerimos solicitar cita en las oficinas de pasaportes de tu localidad.</div>
                <div class="button-group-desktop">
                    <button onclick="avanzarPaso(2)">¡Ya lo tengo!</button>
                </div>
            `; 
            break;

        case 4: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🏆</div>
                <h3 style="text-align: center;">Expediente de Viaje Iniciado</h3>
                <p style="text-align: center;">Comenzaremos con el llenado del <b>Cuestionario de Solicitud de Visa</b> para ${paisActual}.</p>
                <div class="button-group-desktop" style="margin-top:20px;">
                    <button onclick="avanzarPaso(5)">Comenzar Cuestionario</button>
                </div>
            `; 
            break;

        case 5:
            let idx = appData.ds160_index;
            if (idx >= cuestionarioBase.length) { 
                avanzarPaso(6); 
                return; 
            }

            let q = cuestionarioBase[idx];
            let respuestaPrevia = appData.respuestas_ds160[q.id] || "";
            let preguntaTexto = formatearTextoPregunta(q.pregunta, paisActual);

            html = `
                <p style="text-transform: uppercase; font-size: 13px; color: #666; margin-bottom:0; font-weight:bold;">Pregunta ${idx + 1} de ${cuestionarioBase.length}</p>
                <p style="color: var(--color-acento); font-weight:bold; margin-top:5px; font-size:12px;">▶ SECCIÓN: ${q.categoria} (${paisLimpio})</p>
                <h3 style="text-align: left; margin: 10px 0 15px 0;">${preguntaTexto}</h3>
                
                <div class="form-grid-2">
            `;

            if (q.tipo === "direccion_mx") {
                html += `
                    <div class="full-width">
                        <label>1. Código Postal:</label>
                        <div style="display:flex; gap:10px;">
                            <input type="number" id="cp_input" placeholder="Ej. 80000" onkeyup="if(this.value.length === 5) buscarCP()">
                            <button type="button" onclick="buscarCP()" style="width: auto; margin-top: 6px;">Buscar</button>
                        </div>
                        <div id="direccion_detalles" style="display:none; border-top: 1px solid #ccc; padding-top: 15px;">
                            <p id="msg_estado" style="font-size: 14px; font-weight: bold; margin: 0 0 10px 0;"></p>
                            <label>2. Colonia:</label><select id="colonia_select"></select>
                            <label style="margin-top: 10px; display:block;">3. Calle y Número:</label><input type="text" id="calle_input" placeholder="Ej. Calle 123">
                        </div>
                        ${respuestaPrevia ? `<p style="font-size:13px; color:var(--color-primario);"><b>Guardado:</b> ${respuestaPrevia}</p>` : ''}
                    </div>`;
            }
            else if (q.tipo === "nombre_nacimiento_combo") {
                let d = {nombreCompleto: "", fechaNacimiento: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. Nombre(s) y Apellidos Completos:</label>
                        <input type="text" id="per_nombre" value="${d.nombreCompleto}" placeholder="Exacto a tu pasaporte">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. Fecha de Nacimiento:</label>
                        <input type="date" id="per_fecha" value="${d.fechaNacimiento}">
                    </div>
                `;
            }
            else if (q.tipo === "lugar_nacionalidad_combo") {
                let d = {municipio: "", nac_sino: "", nac_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. Municipio de Nacimiento:</label>
                        <input type="text" id="lug_municipio" value="${d.municipio || ''}" placeholder="Ej. Culiacán">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ¿Tiene otra nacionalidad?:</label>
                        <select id="lug_nac_sino" onchange="document.getElementById('div_lug_nac').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.nac_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.nac_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div id="div_lug_nac" class="full-width" style="display: ${d.nac_sino === 'Sí' ? 'block' : 'none'};">
                        <label style="font-size:13px; color: var(--color-primario);">Especifica cuál o cuáles:</label>
                        <input type="text" id="lug_nac_det" value="${d.nac_det || ''}" placeholder="Ej. Española">
                    </div>
                `;
            }
            else if (q.tipo === "contacto_redes_combo") {
                let d = {telefonos: "", redes: "", prev_sino: "", prev_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. Teléfonos Actuales:</label>
                        <input type="text" id="cnt_telefonos" value="${d.telefonos || ''}" placeholder="Celular / Casa">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ¿Otros teléfonos/emails en 5 años?:</label>
                        <select id="cnt_prev_sino" onchange="document.getElementById('div_cnt_prev').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.prev_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.prev_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. Redes Sociales (Facebook, Instagram, etc.):</label>
                        <textarea id="cnt_redes" placeholder="Usuarios o enlaces exactos...">${d.redes || ''}</textarea>
                    </div>
                    <div id="div_cnt_prev" class="full-width" style="display: ${d.prev_sino === 'Sí' ? 'block' : 'none'};">
                        <label style="font-size:13px; color: var(--color-primario);">Detalla números o correos anteriores:</label>
                        <textarea id="cnt_prev_det" placeholder="Escribe aquí...">${d.prev_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "esposo_combo") {
                let d = {nombre: "", fecha: "", lugar: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">1. Nombre Completo:</label>
                        <input type="text" id="esp_nombre" value="${d.nombre || ''}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. Fecha de Nacimiento:</label>
                        <input type="date" id="esp_fecha" value="${d.fecha || ''}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">3. Lugar de Nacimiento:</label>
                        <input type="text" id="esp_lugar" value="${d.lugar || ''}">
                    </div>
                `;
            }
            else if (q.tipo === "padres_combo") {
                let d = {nombres: "", ocupacion: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">1. Nombres y Fechas de Nacimiento de Padre y Madre:</label>
                        <textarea id="pad_nombres" placeholder="Ej. Juan Pérez (01/Ene/1960)...">${d.nombres}</textarea>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">2. ¿A qué se dedican sus padres?:</label>
                        <textarea id="pad_ocupacion" placeholder="Ocupaciones...">${d.ocupacion}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "educacion_combo") {
                let datosEdu = {nivel: "", especialidad: "", escuelas: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { datosEdu = JSON.parse(respuestaPrevia); } catch(e){} }
                let requiereEspecialidad = ["Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado"].includes(datosEdu.nivel);
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. Nivel de Estudios:</label>
                        <select id="edu_nivel" onchange="
                            let req = ['Carrera Técnica', 'Licenciatura / Ingeniería', 'Maestría', 'Doctorado'].includes(this.value);
                            document.getElementById('div_especialidad').style.display = req ? 'block' : 'none';
                        ">
                            <option value="">Selecciona...</option>
                            ${["Primaria", "Secundaria", "Preparatoria / Bachillerato", "Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado", "Ninguno"].map(o => `<option value="${o}" ${datosEdu.nivel === o ? 'selected':''}>${o}</option>`).join('')}
                        </select>
                    </div>
                    <div id="div_especialidad" style="display: ${requiereEspecialidad ? 'block' : 'none'};">
                        <label style="font-size:14px; font-weight:bold;">2. Especialidad / Carrera:</label>
                        <input type="text" id="edu_especialidad" value="${datosEdu.especialidad && datosEdu.especialidad !== 'No aplica' ? datosEdu.especialidad : ''}">
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. Instituciones asistidas:</label>
                        <textarea id="edu_escuelas" placeholder="Escuela, domicilio y fechas...">${datosEdu.escuelas}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "empresa_combo") {
                let d = {nombre: "", direccion: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">1. Nombre de la Empresa o Institución:</label>
                        <input type="text" id="emp_nombre" value="${d.nombre}">
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">2. Dirección Completa y Teléfono:</label>
                        <textarea id="emp_direccion">${d.direccion}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "puesto_combo") {
                let d = {puesto: "", antiguedad: "", funciones: "", sueldo: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. Puesto u Ocupación Principal:</label>
                        <input type="text" id="pst_nombre" value="${d.puesto}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. Antigüedad (años):</label>
                        <input type="number" id="pst_antiguedad" value="${d.antiguedad}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">3. Sueldo Mensual Bruto:</label>
                        <input type="text" id="pst_sueldo" value="${d.sueldo}">
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">4. Descripción de Funciones:</label>
                        <textarea id="pst_funciones">${d.funciones}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "plan_viaje_combo") {
                let d = {motivo: "", fecha: "", tiempo: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">1. Motivo Principal de Viaje:</label>
                        <textarea id="pln_motivo">${d.motivo}</textarea>
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. Fecha Aproximada:</label>
                        <input type="date" id="pln_fecha" value="${d.fecha}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">3. Permanencia (días/semanas):</label>
                        <input type="text" id="pln_tiempo" value="${d.tiempo}">
                    </div>
                `;
            }
            else if (q.tipo === "logistica_combo") {
                let d = {hospedaje: "", quienPaga: "", acompanantes_sino: "", acompanantes_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. Quién Cubre Gastos:</label>
                        <input type="text" id="log_quienPaga" value="${d.quienPaga}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ¿Viaja Acompañado?:</label>
                        <select id="log_acompanantes_sino" onchange="document.getElementById('div_log_acompanantes').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.acompanantes_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.acompanantes_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. Hospedaje en Destino:</label>
                        <textarea id="log_hospedaje">${d.hospedaje}</textarea>
                    </div>
                    <div id="div_log_acompanantes" class="full-width" style="display: ${d.acompanantes_sino === 'Sí' ? 'block' : 'none'};">
                        <label style="font-size:13px; color: var(--color-primario);">Nombres y parentesco de acompañantes:</label>
                        <textarea id="log_acompanantes_det">${d.acompanantes_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "contactos_combo") {
                let d = {cercanos_sino: "", cercanos_det: "", otros_sino: "", otros_det: "", viajes_sino: "", viajes_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ¿Familiares Cercanos en ${paisLimpio}?:</label>
                        <select id="cnt_cercanos_sino" onchange="document.getElementById('div_cnt_cercanos').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.cercanos_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.cercanos_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ¿Otros Familiares en ${paisLimpio}?:</label>
                        <select id="cnt_otros_sino" onchange="document.getElementById('div_cnt_otros').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.otros_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.otros_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div id="div_cnt_cercanos" class="full-width" style="display: ${d.cercanos_sino === 'Sí' ? 'block' : 'none'};">
                        <textarea id="cnt_cercanos_det" placeholder="Detalles de familiares cercanos...">${d.cercanos_det || ''}</textarea>
                    </div>
                    <div id="div_cnt_otros" class="full-width" style="display: ${d.otros_sino === 'Sí' ? 'block' : 'none'};">
                        <textarea id="cnt_otros_det" placeholder="Detalles de otros familiares...">${d.otros_det || ''}</textarea>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. ¿Viajes a otros países en 5 años?:</label>
                        <select id="cnt_viajes_sino" onchange="document.getElementById('div_cnt_viajes').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.viajes_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.viajes_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div id="div_cnt_viajes" class="full-width" style="display: ${d.viajes_sino === 'Sí' ? 'block' : 'none'};">
                        <textarea id="cnt_viajes_det" placeholder="Países y fechas...">${d.viajes_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "pasaporte_combo") {
                let d = {lugarEmision: "", robo_sino: "", robo_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. Lugar de Emisión:</label>
                        <input type="text" id="psp_emision" value="${d.lugarEmision || ''}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ¿Pasaporte extraviado/robado?:</label>
                        <select id="psp_robo_sino" onchange="document.getElementById('div_psp_robo').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.robo_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.robo_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div id="div_psp_robo" class="full-width" style="display: ${d.robo_sino === 'Sí' ? 'block' : 'none'};">
                        <textarea id="psp_robo_det" placeholder="Detalles de robo o extravío...">${d.robo_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "visas_historial_combo") {
                let d = {otorgada_sino: "", otorgada_det: "", perdidarobada_sino: "", perdidarobada_det: "", problemas_sino: "", problemas_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ¿Visa otorgada previamente?:</label>
                        <select id="vis_otorgada_sino" onchange="document.getElementById('div_vis_otorgada').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.otorgada_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.otorgada_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ¿Visa robada/revocada?:</label>
                        <select id="vis_perdidarobada_sino" onchange="document.getElementById('div_vis_perdidarobada').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.perdidarobada_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.perdidarobada_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div id="div_vis_otorgada" class="full-width" style="display: ${d.otorgada_sino === 'Sí' ? 'block' : 'none'};">
                        <textarea id="vis_otorgada_det" placeholder="Detalles de la visa otorgada...">${d.otorgada_det || ''}</textarea>
                    </div>
                    <div id="div_vis_perdidarobada" class="full-width" style="display: ${d.perdidarobada_sino === 'Sí' ? 'block' : 'none'};">
                        <textarea id="vis_perdidarobada_det" placeholder="Circunstancias y año...">${d.perdidarobada_det || ''}</textarea>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. ¿Inconveniente de entrada o trámite?:</label>
                        <select id="vis_problemas_sino" onchange="document.getElementById('div_vis_problemas').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${d.problemas_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                            <option value="No" ${d.problemas_sino === 'No' ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div id="div_vis_problemas" class="full-width" style="display: ${d.problemas_sino === 'Sí' ? 'block' : 'none'};">
                        <textarea id="vis_problemas_det" placeholder="Explique la situación...">${d.problemas_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "sino_texto") {
                let isSi = respuestaPrevia.startsWith("Sí");
                let detalle = isSi ? respuestaPrevia.replace("Sí: ", "") : "";
                let isNo = respuestaPrevia === "No";
                html += `
                    <div class="full-width">
                        <select id="respuestaDS160_sino" onchange="document.getElementById('div_detalle').style.display = this.value === 'Sí' ? 'block' : 'none'">
                            <option value="">Selecciona...</option>
                            <option value="Sí" ${isSi ? 'selected' : ''}>Sí</option>
                            <option value="No" ${isNo ? 'selected' : ''}>No</option>
                        </select>
                    </div>
                    <div id="div_detalle" class="full-width" style="display: ${isSi ? 'block' : 'none'};">
                        <textarea id="respuestaDS160_detalle" placeholder="Detalles requeridos...">${detalle}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "select") {
                html += `<div class="full-width"><select id="respuestaDS160"><option value="">Selecciona...</option>${q.opciones.map(opt => `<option value="${opt}" ${respuestaPrevia === opt ? 'selected' : ''}>${opt}</option>`).join('')}</select></div>`;
            } else if (q.tipo === "textarea") {
                html += `<div class="full-width"><textarea id="respuestaDS160">${respuestaPrevia}</textarea></div>`;
            } else {
                html += `<div class="full-width"><input type="${q.tipo}" id="respuestaDS160" value="${respuestaPrevia}"></div>`;
            }

            html += `
                    <div class="tip-box full-width"><strong>💡 Consejo:</strong><br>${q.tip}</div>
                    <div class="button-group-desktop">
                        <button onclick="guardarRespuestaCuestionario('${q.id}', '${q.tipo}')">Guardar y Siguiente</button>
                        ${idx > 0 ? `<button onclick="retrocederPreguntaDS()" class="secondary">Regresar</button>` : ''}
                    </div>
                </div>
            `;
            break;

        case 6: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📝</div>
                <h3 style="text-align: center;">¡Cuestionario Terminado!</h3>
                <p style="text-align: center; margin-bottom: 20px;">Destino: <b>${paisActual}</b></p>
                <div class="button-group-desktop">
                    <button class="success" onclick="avanzarPaso(7)">Siguiente: Citas y Seguimiento</button>
                </div>
            `; 
            break;

        case 7: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📸</div>
                <h3 style="text-align: center;">Paso 3: Cita de Registro Biométrico / Fotos</h3>
                <div class="button-group-desktop" style="margin-top: 20px;">
                    <button onclick="avanzarPaso(8)">Sí, ya la agendé</button>
                    <button onclick="avanzarPaso(9)" class="secondary">No, aún no</button>
                </div>
            `; 
            break;

        case 8: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📅</div>
                <h3 style="text-align: center;">Tus Datos de Biométricos</h3>
                <div class="tip-box"><strong>💡 Tip:</strong> Registro de huellas digitales y fotografía oficial.</div>
                <div class="form-grid-2">
                    <div><label>Fecha:</label><input type="date" id="cita_fecha" value="${appData.cita_cas?.fecha || ''}"></div>
                    <div><label>Hora:</label><input type="time" id="cita_hora" value="${appData.cita_cas?.hora || ''}"></div>
                    <div class="full-width"><label>Lugar/Dirección:</label><input type="text" id="cita_lugar" value="${appData.cita_cas?.lugar || ''}"></div>
                    <div class="button-group-desktop">
                        <button onclick="guardarCita('cas', 10)">Guardar Cita</button>
                    </div>
                </div>
            `; 
            break;

        case 9: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🤝</div>
                <div class="agency-box"><strong>🤝 Recomendación:</strong><br>Consulta las fechas disponibles en el portal oficial o con un asesor de confianza.</div>
                <div class="button-group-desktop">
                    <button onclick="avanzarPaso(8)">¡Ya agendé!</button>
                    <button onclick="avanzarPaso(10)" class="secondary">Dejar pendiente y avanzar</button>
                </div>
            `; 
            break;

        case 10: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🏛️</div>
                <h3 style="text-align: center;">Paso 4: Cita Consular / Entrevista de Visado</h3>
                <div class="button-group-desktop" style="margin-top:20px;">
                    <button onclick="avanzarPaso(11)">Sí, ya la tengo</button>
                    <button onclick="avanzarPaso(12)" class="secondary">No, aún no</button>
                </div>
            `; 
            break;

        case 11: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📍</div>
                <h3 style="text-align: center;">Datos de la Cita Consular</h3>
                <div class="warning-box"><strong>⚠️ ATENCIÓN:</strong> Verifica las fechas de tu cita y la ubicación del consulado.</div>
                <div class="form-grid-2">
                    <div><label>Fecha:</label><input type="date" id="cita_fecha" value="${appData.cita_entrevista?.fecha || ''}"></div>
                    <div><label>Hora:</label><input type="time" id="cita_hora" value="${appData.cita_entrevista?.hora || ''}"></div>
                    <div class="full-width"><label>Lugar/Embajada:</label><input type="text" id="cita_lugar" value="${appData.cita_entrevista?.lugar || ''}"></div>
                    <div class="button-group-desktop">
                        <button onclick="guardarCita('entrevista', 13)">Guardar Cita</button>
                    </div>
                </div>
            `; 
            break;

        case 12: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🔎</div>
                <div class="agency-box"><strong>🤝 Recomendación:</strong><br>Monitorea constantemente el sistema oficial en caso de que se liberen fechas más cercanas.</div>
                <div class="button-group-desktop">
                    <button onclick="avanzarPaso(11)">¡Ya agendé!</button>
                    <button onclick="avanzarPaso(13)" class="secondary">Finalizar sin fecha de cita</button>
                </div>
            `; 
            break;

        case 13: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🎉</div>
                <h3 style="color: var(--color-primario); text-align: center;">¡Expediente Completo!</h3>
                <p style="text-align: center;">Tienes toda la información organizada para tu solicitud de visa a <b>${paisActual}</b>.</p>
                
                <div class="interview-tips">
                    <h4 style="margin-top:0; color:#01579b;">🎯 Consejos para tu Entrevista de Visa</h4>
                    <p>✅ <strong>Respuestas claras:</strong> Asegúrate de que tus datos verbales coincidan exactamente con tu cuestionario.</p>
                    <p>❌ <strong>Evita errores:</strong> No des explicaciones unnecessarily largas que generen dudas.</p>
                </div>

                <div class="button-group-desktop">
                    <button class="success" onclick="mostrarResumen()">Ver mi Expediente y Compartir</button>
                    <button class="secondary" onclick="regresarAUltimaPregunta()">✏️ Editar última pregunta</button>
                </div>
            `; 
            break;
    }

    if (pasoForzado === null && appData.paso_actual > 0) {
        html = `
            <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">👋</div>
            <h3 style="text-align: center;">¡Bienvenido de vuelta!</h3>
            <p style="text-align: center;">Solicitud de viaje en proceso para: <b>${paisActual}</b></p>
            <div class="button-group-desktop" style="margin-top:20px;">
                <button class="success" onclick="renderScreen(${appData.paso_actual})">🚀 Continuar Mi Expediente</button>
            </div>
            <div style="text-align: center; margin-top: 15px;">
                <button onclick="confirmarBorrado()" style="background:none; color:red; border:none; text-decoration:underline; cursor:pointer; width:auto;">Borrar mis datos y empezar de nuevo</button>
            </div>
        `;
    }
    document.getElementById('screenContent').innerHTML = html;
}

function guardarPaisInicial() {
    let p = document.getElementById('selectPaisDestino').value;
    appData.pais_destino = p;
    avanzarPaso(1);
}

function guardarRespuestaCuestionario(id, tipo) {
    let v = "";
    if(tipo === "direccion_mx") {
        let cp=document.getElementById('cp_input').value.trim(), ca=document.getElementById('calle_input').value.trim(), co=document.getElementById('colonia_select').value;
        if(!ca || !cp) { mostrarAlerta("Busca tu Código Postal y escribe tu calle para continuar."); return; }
        v = `${ca}, Col. ${co}, C.P. ${cp}`;
    } 
    else if(tipo === "nombre_nacimiento_combo") {
        let nom = document.getElementById('per_nombre').value.trim();
        let fch = document.getElementById('per_fecha').value.trim();
        if(!nom || !fch) { mostrarAlerta("Por favor completa tu nombre y fecha de nacimiento."); return; }
        v = JSON.stringify({nombreCompleto: nom, fechaNacimiento: fch});
    }
    else if(tipo === "lugar_nacionalidad_combo") {
        let mun = document.getElementById('lug_municipio').value.trim();
        let nac_sino = document.getElementById('lug_nac_sino').value;
        let nac_det = document.getElementById('lug_nac_det').value.trim();
        if(!mun || !nac_sino) { mostrarAlerta("Completa los campos obligatorios."); return; }
        v = JSON.stringify({municipio: mun, nac_sino: nac_sino, nac_det: nac_sino === 'Sí' ? nac_det : 'No'});
    }
    else if(tipo === "contacto_redes_combo") {
        let tel = document.getElementById('cnt_telefonos').value.trim();
        let red = document.getElementById('cnt_redes').value.trim();
        let prev_sino = document.getElementById('cnt_prev_sino').value;
        let prev_det = document.getElementById('cnt_prev_det').value.trim();
        if(!tel || !red || !prev_sino) { mostrarAlerta("Completa todos los campos solicitados."); return; }
        v = JSON.stringify({telefonos: tel, redes: red, prev_sino: prev_sino, prev_det: prev_sino === 'Sí' ? prev_det : 'No'});
    }
    else if(tipo === "esposo_combo") {
        let nom = document.getElementById('esp_nombre').value.trim();
        let fch = document.getElementById('esp_fecha').value.trim();
        let lug = document.getElementById('esp_lugar').value.trim();
        if(!nom || !fch || !lug) { mostrarAlerta("Completa los datos de tu esposo(a)."); return; }
        v = JSON.stringify({nombre: nom, fecha: fch, lugar: lug});
    }
    else if(tipo === "padres_combo") {
        let nom = document.getElementById('pad_nombres').value.trim();
        let ocu = document.getElementById('pad_ocupacion').value.trim();
        if(!nom || !ocu) { mostrarAlerta("Completa la información de tus padres."); return; }
        v = JSON.stringify({nombres: nom, ocupacion: ocu});
    }
    else if(tipo === "educacion_combo") {
        let n = document.getElementById('edu_nivel').value;
        let esc = document.getElementById('edu_escuelas').value.trim();
        let requiereEspecialidad = ["Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado"].includes(n);
        let e = requiereEspecialidad ? document.getElementById('edu_especialidad').value.trim() : "No aplica";
        if(!n || !esc) { mostrarAlerta("Completa tu nivel de estudios e instituciones."); return; }
        v = JSON.stringify({nivel: n, especialidad: e, escuelas: esc});
    }
    else if(tipo === "empresa_combo") {
        let nom = document.getElementById('emp_nombre').value.trim();
        let dir = document.getElementById('emp_direccion').value.trim();
        if(!nom || !dir) { mostrarAlerta("Ingresa la empresa y dirección completa."); return; }
        v = JSON.stringify({nombre: nom, direccion: dir});
    }
    else if(tipo === "puesto_combo") {
        let pst = document.getElementById('pst_nombre').value.trim();
        let ant = document.getElementById('pst_antiguedad').value.trim();
        let sld = document.getElementById('pst_sueldo').value.trim();
        let fnc = document.getElementById('pst_funciones').value.trim();
        if(!pst || !ant || !sld || !fnc) { mostrarAlerta("Completa los datos de tu puesto."); return; }
        v = JSON.stringify({puesto: pst, antiguedad: ant, sueldo: sld, funciones: fnc});
    }
    else if(tipo === "plan_viaje_combo") {
        let mot = document.getElementById('pln_motivo').value.trim();
        let fch = document.getElementById('pln_fecha').value.trim();
        let tmp = document.getElementById('pln_tiempo').value.trim();
        if(!mot || !fch || !tmp) { mostrarAlerta("Completa tu plan de viaje."); return; }
        v = JSON.stringify({motivo: mot, fecha: fch, tiempo: tmp});
    }
    else if(tipo === "logistica_combo") {
        let hsp = document.getElementById('log_hospedaje').value.trim();
        let pag = document.getElementById('log_quienPaga').value.trim();
        let acm_sino = document.getElementById('log_acompanantes_sino').value;
        let acm_det = document.getElementById('log_acompanantes_det').value.trim();
        if(!hsp || !pag || !acm_sino) { mostrarAlerta("Completa los datos de hospedaje."); return; }
        v = JSON.stringify({hospedaje: hsp, quienPaga: pag, acompanantes_sino: acm_sino, acompanantes_det: acm_sino === 'Sí' ? acm_det : 'No'});
    }
    else if(tipo === "contactos_combo") {
        let crc_sino = document.getElementById('cnt_cercanos_sino').value;
        let crc_det  = document.getElementById('cnt_cercanos_det').value.trim();
        let otr_sino = document.getElementById('cnt_otros_sino').value;
        let otr_det  = document.getElementById('cnt_otros_det').value.trim();
        let vjs_sino = document.getElementById('cnt_viajes_sino').value;
        let vjs_det  = document.getElementById('cnt_viajes_det').value.trim();
        if(!crc_sino || !otr_sino || !vjs_sino) { mostrarAlerta("Responde a todas las preguntas."); return; }
        v = JSON.stringify({
            cercanos_sino: crc_sino, cercanos_det: crc_sino === 'Sí' ? crc_det : 'No aplica',
            otros_sino: otr_sino, otros_det: otr_sino === 'Sí' ? otr_det : 'No aplica',
            viajes_sino: vjs_sino, viajes_det: vjs_sino === 'Sí' ? vjs_det : 'No aplica'
        });
    }
    else if(tipo === "pasaporte_combo") {
        let emi = document.getElementById('psp_emision').value.trim();
        let rbo_sino = document.getElementById('psp_robo_sino').value;
        let rbo_det = document.getElementById('psp_robo_det').value.trim();
        if(!emi || !rbo_sino) { mostrarAlerta("Completa la información de tu pasaporte."); return; }
        v = JSON.stringify({lugarEmision: emi, robo_sino: rbo_sino, robo_det: rbo_sino === 'Sí' ? rbo_det : 'No'});
    }
    else if(tipo === "visas_historial_combo") {
        let otg_sino = document.getElementById('vis_otorgada_sino').value;
        let otg_det  = document.getElementById('vis_otorgada_det').value.trim();
        let prv_sino = document.getElementById('vis_perdidarobada_sino').value;
        let prv_det  = document.getElementById('vis_perdidarobada_det').value.trim();
        let prb_sino = document.getElementById('vis_problemas_sino').value;
        let prb_det  = document.getElementById('vis_problemas_det').value.trim();
        if(!otg_sino || !prv_sino || !prb_sino) { mostrarAlerta("Responde a todas las preguntas de visa."); return; }
        v = JSON.stringify({
            otorgada_sino: otg_sino, otorgada_det: otg_sino === 'Sí' ? otg_det : 'No',
            perdidarobada_sino: prv_sino, perdidarobada_det: prv_sino === 'Sí' ? prv_det : 'No',
            problemas_sino: prb_sino, problemas_det: prb_sino === 'Sí' ? prb_det : 'No'
        });
    }
    else if(tipo === "sino_texto") {
        let sino = document.getElementById('respuestaDS160_sino').value;
        if(!sino) { mostrarAlerta("Por favor, selecciona Sí o No."); return; }
        let detalle = document.getElementById('respuestaDS160_detalle').value.trim();
        v = sino === "Sí" ? `Sí${detalle ? ': ' + detalle : ''}` : "No";
    }
    else {
        v = document.getElementById('respuestaDS160').value.trim();
        if(!v) { mostrarAlerta("Escribe o selecciona una respuesta para continuar."); return; }
    }
    
    appData.respuestas_ds160[id] = v; 
    appData.ds160_index++; 
    
    while(appData.ds160_index < cuestionarioBase.length && debeOmitirse(appData.ds160_index)) {
        appData.respuestas_ds160[cuestionarioBase[appData.ds160_index].id] = "No aplica";
        appData.ds160_index++;
    }

    localStorage.setItem('datosVisado', JSON.stringify(appData)); 
    renderScreen(5); 
}

function retrocederPreguntaDS() { 
    appData.ds160_index--; 
    while(appData.ds160_index >= 0 && debeOmitirse(appData.ds160_index)) {
        appData.ds160_index--;
    }
    localStorage.setItem('datosVisado', JSON.stringify(appData)); 
    renderScreen(5); 
}

function guardarCita(t, p) {
    let f = document.getElementById('cita_fecha').value;
    let h = document.getElementById('cita_hora').value;
    let l = document.getElementById('cita_lugar').value.trim();
    if(!f || !l) { mostrarAlerta("Debes ingresar la fecha y lugar."); return; }
    t==='cas' ? appData.cita_cas={fecha:f, hora:h, lugar:l} : appData.cita_entrevista={fecha:f, hora:h, lugar:l};
    avanzarPaso(p);
}

function confirmarBorrado() {
    mostrarConfirmacion("¿Estás seguro de borrar todos tus datos y reiniciar tu solicitud?", "ejecutarResetApp");
}

function ejecutarResetApp() { 
    localStorage.removeItem('datosVisado'); 
    appData = { paso_actual:0, pais_destino:"Estados Unidos 🇺🇸", folio_pasaporte:"", ds160_index:0, respuestas_ds160:{}, cita_cas:null, cita_entrevista:null }; 
    renderScreen(0); 
}

function regresarAUltimaPregunta() {
    appData.paso_actual = 5; 
    appData.ds160_index = cuestionarioBase.length - 1; 
    while(appData.ds160_index >= 0 && debeOmitirse(appData.ds160_index)) {
        appData.ds160_index--;
    }
    localStorage.setItem('datosVisado', JSON.stringify(appData)); 
    renderScreen(5);
}

function editarPreguntaDesdeResumen(idPregunta) {
    let index = cuestionarioBase.findIndex(q => q.id === idPregunta);
    if(index !== -1) {
        appData.paso_actual = 5;
        appData.ds160_index = index;
        localStorage.setItem('datosVisado', JSON.stringify(appData));
        renderScreen(5);
    }
}

function editarPasoDesdeResumen(paso) {
    appData.paso_actual = paso;
    localStorage.setItem('datosVisado', JSON.stringify(appData));
    renderScreen(paso);
}

function mostrarResumen() {
    let paisActual = appData.pais_destino || "Estados Unidos 🇺🇸";
    let paisLimpio = obtenerNombrePaisLimpio(paisActual);
    
    let txtWhats = `*===== EXPEDIENTE DE SOLICITUD DE VISA =====*\n`;
    txtWhats += `*DESTINO DE VIAJE:* ${paisLimpio}\n`;
    txtWhats += `*FOLIO PASAPORTE:* ${appData.folio_pasaporte}\n\n`;
    
    let htmlVista = `<div class="resumen-header"><h2 style="color:var(--color-primario); border-bottom: 2px solid var(--color-primario); padding-bottom:10px;">Expediente de Solicitud de Visa</h2>`;
    htmlVista += `<p><b>País Destino:</b> ${paisLimpio} <span onclick="editarPasoDesdeResumen(0)" style="cursor:pointer;" title="Editar País">✏️</span></p>`;
    htmlVista += `<p><b>Folio Pasaporte:</b> ${appData.folio_pasaporte} <span onclick="editarPasoDesdeResumen(2)" style="cursor:pointer;" title="Editar">✏️</span></p></div>`;
    
    htmlVista += `<div class="resumen-grid">`;
    let categoriaActual = "";

    for (const [clave, valorOrig] of Object.entries(appData.respuestas_ds160)) {
        let p = cuestionarioBase.find(item => item.id === clave);
        if(valorOrig === "No aplica") continue;
        
        let valor = valorOrig;
        if(typeof valor === 'string' && valor.startsWith("{")) {
            try {
                let obj = JSON.parse(valor);
                if(obj.nombreCompleto) valor = `Nombre: ${obj.nombreCompleto}\nFecha Nac: ${obj.fechaNacimiento}`;
                else if(obj.municipio) valor = `Municipio: ${obj.municipio}\nOtra Nac: ${obj.nac_sino} (${obj.nac_det})`;
                else if(obj.telefonos) valor = `Tels: ${obj.telefonos}\nRedes: ${obj.redes}`;
                else if(obj.nombre && obj.fecha) valor = `Cónyuge: ${obj.nombre}\nNac: ${obj.fecha} (${obj.lugar})`;
                else if(obj.nivel) valor = `Nivel: ${obj.nivel}\nCarrera: ${obj.especialidad}\nEscuelas: ${obj.escuelas}`;
                else if(obj.puesto) valor = `Puesto: ${obj.puesto} (${obj.antiguedad} años)\nSueldo: ${obj.sueldo}\nFunciones: ${obj.funciones}`;
                else if(obj.motivo) valor = `Motivo: ${obj.motivo}\nFecha: ${obj.fecha} (${obj.tiempo})`;
                else if(obj.hospedaje) valor = `Hospedaje: ${obj.hospedaje}\nPaga: ${obj.quienPaga}`;
            } catch(e) {}
        }

        if(p && p.categoria !== categoriaActual) {
            categoriaActual = p.categoria;
            txtWhats += `\n*--- SECCIÓN: ${categoriaActual} ---*\n`;
            htmlVista += `<h3 class="full-width" style="background:var(--color-acento); color:#fff; padding:6px; border-radius:4px; margin-top:15px;">${categoriaActual}</h3>`;
        }

        let preguntaTXT = p ? formatearTextoPregunta(p.pregunta, paisLimpio) : clave.toUpperCase();
        txtWhats += `*${preguntaTXT}*\n${valor}\n\n`;
        
        htmlVista += `
            <div style="margin-bottom: 10px; border-bottom: 1px dashed #ccc; padding-bottom: 5px;">
                <p style="margin:0; font-size:12px; color:#555;">
                    ${preguntaTXT}
                    <span onclick="editarPreguntaDesdeResumen('${clave}')" style="cursor:pointer; float:right;" title="Editar">✏️</span>
                </p>
                <p style="margin:0; font-size:15px; font-weight:bold; color:#000; white-space: pre-wrap;">${valor}</p>
            </div>
        `;
    }
    htmlVista += `</div>`;

    if(appData.cita_cas) {
        htmlVista += `<h3 style="color:var(--color-primario); margin-top:20px;">Cita Biométricos <span onclick="editarPasoDesdeResumen(8)" style="cursor:pointer;">✏️</span></h3>
                      <p><b>${appData.cita_cas.fecha} - ${appData.cita_cas.hora}</b><br>${appData.cita_cas.lugar}</p>`;
    }
    if(appData.cita_entrevista) {
        htmlVista += `<h3 style="color:var(--color-primario); margin-top:10px;">Cita Consular <span onclick="editarPasoDesdeResumen(11)" style="cursor:pointer;">✏️</span></h3>
                      <p><b>${appData.cita_entrevista.fecha} - ${appData.cita_entrevista.hora}</b><br>${appData.cita_entrevista.lugar}</p>`;
    }

    let textoCodificado = encodeURIComponent(txtWhats);

    let pantallaFinal = `
        <div id="areaImprimir" style="text-align:left; background:#fff; padding:20px; border:1px solid #ccc; max-height: 450px; overflow-y: auto; border-radius: 8px;">
            ${htmlVista}
        </div>
        <div class="button-group-desktop" style="margin-top:20px;">
            <button class="success" onclick="window.print()">🖨️ Imprimir / Guardar PDF</button>
            <button class="whatsapp" onclick="window.open('https://api.whatsapp.com/send?text=${textoCodificado}', '_blank')">💬 Compartir por WhatsApp</button>
            <button class="secondary" onclick="renderScreen(13)">Volver atrás</button>
        </div>
        <hr style="border: 0; border-top: 1px dashed #ccc; margin: 25px 0 15px 0;">
        <button onclick="confirmarBorrado()" style="background: var(--color-acento); color: white;">🗑️ Crear Nueva Solicitud</button>
    `;
    
    document.getElementById('screenContent').innerHTML = pantallaFinal;
}

renderScreen();
