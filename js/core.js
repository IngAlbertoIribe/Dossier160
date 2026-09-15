// ==========================================
// CORE.JS - SISTEMA DE EXPEDIENTE DE VIAJE Y VISA
// ==========================================

// --- DEFINICIÓN DEL CUESTIONARIO BASE ---
const cuestionarioBase = [
    // --- SECCIÓN 1: PERSONAL ---
    { categoria: "PERSONAL", id: "email", pregunta: "E-MAIL:", tip: "Usa un correo al que tengas acceso diario.", tipo: "email" },
    
    // PASO UNIFICADO 1: NOMBRE Y FECHA DE NACIMIENTO
    { categoria: "PERSONAL", id: "nombre_nacimiento_combo", pregunta: "NOMBRE COMPLETO Y FECHA DE NACIMIENTO:", tip: "Ingresa tu nombre exactamente como aparece en tu pasaporte y tu fecha de nacimiento.", tipo: "nombre_nacimiento_combo" },
    
    // PASO UNIFICADO 2: MUNICIPIO Y OTRA NACIONALIDAD
    { categoria: "PERSONAL", id: "lugar_nacionalidad_combo", pregunta: "LUGAR DE NACIMIENTO Y OTRA NACIONALIDAD:", tip: "Verifica tu municipio en tu acta de nacimiento e indica si posees otra nacionalidad.", tipo: "lugar_nacionalidad_combo" },

    { categoria: "PERSONAL", id: "direccion_completa", pregunta: "DIRECCIÓN COMPLETA DE RESIDENCIA ACTUAL:", tip: "Ingresa tu Código Postal para buscar tu colonia.", tipo: "direccion_mx" },
    
    // PASO UNIFICADO 3: TELÉFONOS Y REDES SOCIALES
    { categoria: "PERSONAL", id: "contacto_redes_combo", pregunta: "TELÉFONOS Y REDES SOCIALES:", tip: "⚠️ IMPORTANTE: Números donde puedan localizarte y tus usuarios o enlaces exactos (Ej. facebook.com/juanperez). Los consulados verifican estas cuentas.", tipo: "contacto_redes_combo" },

    { categoria: "PERSONAL", id: "estado_civil", pregunta: "ESTADO CIVIL:", tip: "Selecciona una opción. (Si eliges 'Soltero' o 'Divorciado', omitiremos los datos de cónyuge).", tipo: "select", opciones: ["Soltero(a)", "Casado(a)", "Divorciado(a)", "Viudo(a)", "Unión Libre"] },
    
    // PASO UNIFICADO: DATOS DE ESPOSO(A) (Omitido si es Soltero o Divorciado)
    { categoria: "PERSONAL", id: "esposo_combo", pregunta: "INFORMACIÓN DE SU ESPOSO(A) / EX-ESPOSO(A):", tip: "⚠️ OBLIGATORIO: Nombre completo con apellidos, fecha y lugar de nacimiento.", tipo: "esposo_combo" },
    
    { categoria: "PERSONAL", id: "datos_hijos", pregunta: "¿TIENE HIJOS?", tip: "Si tienes, captura nombres completos y fechas de nacimiento.", tipo: "sino_texto" },
    
    { categoria: "PERSONAL", id: "historial_previo_eu", pregunta: "¿HA VIAJADO O HA TENIDO VISA DEL PAÍS DESTINO ANTERIORMENTE?", tip: "Si eliges 'No', omitiremos preguntas sobre permisos locales, visas previas e historial de viajes a ese destino.", tipo: "select", opciones: ["Sí, he viajado o he tenido visa", "No, nunca he ido y es mi primera visa"] },
    
    // Omitidas si NO ha viajado antes
    { categoria: "PERSONAL", id: "ssn_tax_id", pregunta: "EN EL PAÍS DESTINO ¿CUENTAS CON REGISTRO, SEGURO O ID LOCAL?", tip: "Si respondes Sí, anota el número.", tipo: "sino_texto" },

    { categoria: "PERSONAL", id: "historial_contacto", pregunta: "EN LOS ÚLTIMOS 5 AÑOS ¿HAS USADO OTROS TELÉFONOS/EMAILS?", tip: "Si respondes Sí, anótalos detalladamente.", tipo: "sino_texto" },
    
    // --- DATOS DE PADRES (PASO UNIFICADO) ---
    { categoria: "PERSONAL", id: "padres_combo", pregunta: "INFORMACIÓN DE SUS PADRES:", tip: "⚠️ OBLIGATORIO: Nombres completos, fechas de nacimiento y ocupación de AMBOS padres (aunque hayan fallecido o estén jubilados).", tipo: "padres_combo" },
    
    // --- PROPIEDADES (ARRAIGO PERSONAL) ---
    { categoria: "PERSONAL", id: "propiedades", pregunta: "¿TIENE PROPIEDADES A SU NOMBRE EN SU PAÍS DE ORIGEN?", tip: "Ej. 'Casa propia y 1 vehículo'. Demuestra tus lazos de arraigo con tu país.", tipo: "sino_texto" },

    // --- SECCIÓN 2: PROFESIONAL (FORMULARIOS COMPUESTOS) ---
    { categoria: "PROFESIONAL", id: "educacion_completa", pregunta: "INFORMACIÓN ACADÉMICA:", tip: "Captura tu nivel, tu especialidad (si aplica) y tus instituciones.", tipo: "educacion_combo" },
    { categoria: "PROFESIONAL", id: "anos_experiencia", pregunta: "¿CUÁNTOS AÑOS DE EXPERIENCIA TIENE EN SU PROFESIÓN/OFICIO?", tip: "Escribe solo el número de años ejerciendo. Ej. 10", tipo: "number" },
    
    // PASO UNIFICADO 1: EMPRESA Y DIRECCIÓN
    { categoria: "PROFESIONAL", id: "empresa_y_direccion", pregunta: "DATOS DE LA EMPRESA O INSTITUCIÓN ACTUAL:", tip: "Nombre de la empresa/escuela, teléfono y su domicilio completo.", tipo: "empresa_combo" },
    
    // PASO UNIFICADO 2: PUESTO, ANTIGÜEDAD, FUNCIONES Y SUELDO
    { categoria: "PROFESIONAL", id: "puesto_y_detalles", pregunta: "DETALLES DE SU PUESTO Y ACTIVIDADES:", tip: "Ingresa tu puesto, antigüedad, sueldo bruto y descripción de funciones.", tipo: "puesto_combo" },
    
    // Omitida si antigüedad en el empleo actual >= 5 años
    { categoria: "PROFESIONAL", id: "empleos_anteriores", pregunta: "MENCIONE SUS ÚLTIMOS 2 EMPLEOS ANTERIORES:", tip: "Empresa, dirección, tel, cargo, jefe y fechas.", tipo: "textarea" },
    { categoria: "PROFESIONAL", id: "organizaciones", pregunta: "¿PERTENECE A UNA ORGANIZACIÓN SOCIAL O PROFESIONAL?:", tip: "Colegios, sindicatos, clubes, etc.", tipo: "sino_texto" },

    // --- SECCIÓN 3: CONSULADO Y VIAJE (NUEVOS PASOS COMPUESTOS) ---
    
    // BLOQUE VIAJE 1: PLAN DE VIAJE
    { categoria: "CONSULADO Y VIAJE", id: "plan_viaje_combo", pregunta: "PLAN DE VIAJE AL DESTINO:", tip: "Motivo del viaje, fecha proyectada y días de estancia.", tipo: "plan_viaje_combo" },
    
    // BLOQUE VIAJE 2: LOGÍSTICA Y FINANCIAMIENTO
    { categoria: "CONSULADO Y VIAJE", id: "logistica_viaje_combo", pregunta: "HOSPEDAJE Y FINANCIAMIENTO DEL VIAJE:", tip: "Lugar donde te hospedarás, quién cubre los gastos y si viajas acompañado.", tipo: "logistica_combo" },
    
    // BLOQUE VIAJE 3: CONTACTOS Y CONTACTO INTERNACIONAL
    { categoria: "CONSULADO Y VIAJE", id: "contactos_y_viajes_combo", pregunta: "CONTACTOS EN EL DESTINO Y VIAJES INTERNACIONALES:", tip: "Familiares cercanos, otros familiares y viajes realizados en los últimos 5 años.", tipo: "contactos_combo" },
    
    // BLOQUE VIAJE 4: DATOS DEL PASAPORTE
    { categoria: "CONSULADO Y VIAJE", id: "pasaporte_detalles_combo", pregunta: "DATOS DEL PASAPORTE Y ROBO/EXTRAVÍO:", tip: "Lugar de emisión y si has tenido reportes de pasaporte perdido.", tipo: "pasaporte_combo" },

    // --- OMITIDAS SI ES PRIMERA VEZ QUE VIAJA ---
    { categoria: "CONSULADO Y VIAJE", id: "visitas_anteriores", pregunta: "¿HA ESTADO ALGUNA VEZ EN EL PAÍS DESTINO? (FECHAS):", tip: "Revisa los sellos de tu pasaporte anterior.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "licencia_eu", pregunta: "¿TIENE LICENCIA DE CONDUCIR O ID DEL PAÍS DESTINO?:", tip: "Si tienes, anota el número.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "visas_anteriores", pregunta: "¿ALGUNA VEZ LE HAN OTORGADO UNA VISA DE ESTE PAÍS?:", tip: "Fecha de emisión y si te tomaron datos biométricos.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "visa_robada", pregunta: "¿ALGUNA VEZ LE ROBARON, EXTRAVIÓ O REVOCARON UNA VISA?:", tip: "Explica brevemente y pon el año.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "problemas_legales_eu", pregunta: "¿ALGUNA VEZ HA TENIDO ALGÚN INCONVENIENTE DE ENTRADA O TRÁMITE PREVIO EN ESE PAÍS?", tip: "Sé 100% honesto.", tipo: "sino_texto" },
    
    // --- SEGURIDAD GENERAL ---
    { categoria: "CONSULADO Y VIAJE", id: "seguridad", pregunta: "¿TIENE EXPERIENCIA EN ARMAS DE FUEGO O HA SERVIDO AL EJÉRCITO?:", tip: "Si respondes Sí, detalla tu experiencia.", tipo: "sino_texto" }
];

// --- CONSTANTES DE OMISIÓN ---
const PREGUNTAS_A_OMITIR_PRIMERA_VEZ = ['ssn_tax_id', 'visitas_anteriores', 'licencia_eu', 'visas_anteriores', 'visa_robada', 'problemas_legales_eu'];
const PREGUNTAS_A_OMITIR_SOLTERO = ['esposo_combo'];

// --- CONSTANTES DE FLUJO ---
const PASOS_PRE_CUESTIONARIO = 5; 
const PASOS_POST_CUESTIONARIO = 8; 
const TOTAL_PASOS = PASOS_PRE_CUESTIONARIO + cuestionarioBase.length + PASOS_POST_CUESTIONARIO; 

// --- INICIALIZACIÓN DE DATOS ---
let appData = JSON.parse(localStorage.getItem('datosVisado')) || {
    paso_actual: 0, 
    pais_destino: "Estados Unidos 🇺🇸",
    folio_pasaporte: "", 
    ds160_index: 0, 
    respuestas_ds160: {}, 
    cita_cas: null, 
    cita_entrevista: null
};

// --- FUNCIONES DE FORMATEO Y LIMPIEZA ---
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

// --- FUNCIONES AUXILIARES ---

function mostrarAlerta(mensaje) {
    document.getElementById('modalMessage').innerText = mensaje;
    document.getElementById('customModal').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('customModal').style.display = 'none';
}

function debeOmitirse(idx) {
    if(idx < 0 || idx >= cuestionarioBase.length) return false;
    let q = cuestionarioBase[idx];
    
    if (appData.respuestas_ds160['historial_previo_eu'] === 'No, nunca he ido y es mi primera visa' && PREGUNTAS_A_OMITIR_PRIMERA_VEZ.includes(q.id)) return true;
    if ((appData.respuestas_ds160['estado_civil'] === 'Soltero(a)' || appData.respuestas_ds160['estado_civil'] === 'Divorciado(a)') && PREGUNTAS_A_OMITIR_SOLTERO.includes(q.id)) return true;
    
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

// --- RENDERIZADO DINÁMICO DE PANTALLAS ---

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
                
                <div style="background: #f0f4f8; border-left: 4px solid var(--color-primario); padding: 12px; margin-bottom: 20px; text-align: left; border-radius: 4px; font-size: 14px; color: #333;">
                    <p style="margin: 0 0 8px 0;"><b>📋 Tu Asistente para Solicitud de Visa y Viajes:</b></p>
                    <p style="margin: 0 0 8px 0;">Esta aplicación te ayuda a <b>recolectar, organizar y validar</b> de forma segura toda la información necesaria para tus formularios de visa y expedientes de viaje.</p>
                    <p style="margin: 0;">Evita errores de captura, ordena tus datos paso a paso y genera una guía clara lista para tu solicitud oficial o entrevista consular.</p>
                </div>

                <label style="font-weight: bold; display: block; margin-bottom: 8px; font-size: 15px;">¿A qué país deseas viajar?</label>
                <select id="selectPaisDestino" style="margin-bottom: 20px; font-size:16px;">
                    <option value="Estados Unidos 🇺🇸" ${appData.pais_destino === "Estados Unidos 🇺🇸" ? "selected":""}>Estados Unidos 🇺🇸</option>
                    <option value="Canadá 🇨🇦" ${appData.pais_destino === "Canadá 🇨🇦" ? "selected":""}>Canadá 🇨🇦</option>
                    <option value="Europa / Espacio Schengen 🇪🇺" ${appData.pais_destino === "Europa / Espacio Schengen 🇪🇺" ? "selected":""}>Europa / Espacio Schengen 🇪🇺</option>
                    <option value="Japón 🇯🇵" ${appData.pais_destino === "Japón 🇯🇵" ? "selected":""}>Japón 🇯🇵</option>
                    <option value="Australia 🇦🇺" ${appData.pais_destino === "Australia 🇦🇺" ? "selected":""}>Australia 🇦🇺</option>
                </select>
                
                <button onclick="guardarPaisInicial()">Iniciar Cuestionario </button>
            `; 
            break;

        case 1: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📘</div>
                <h3>Paso 1: Pasaporte</h3>
                <p>¿Ya cuentas con tu pasaporte vigente para viajar a ${paisActual}?</p>
                <button onclick="avanzarPaso(2)">Sí, ya lo tengo</button>
                <button onclick="avanzarPaso(3)" class="secondary">No, aún no</button>
            `; 
            break;

        case 2: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">✍️</div>
                <h3>¡Excelente!</h3>
                <p>Captura el folio de tu pasaporte:</p>
                <input type="text" id="inputFolio" value="${appData.folio_pasaporte || ''}">
                <button onclick="guardarInputGeneral('folio_pasaporte', 'inputFolio', 4)">Guardar Folio</button>
            `; 
            break;

        case 3: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">⏳</div>
                <h3>Paso Pendiente</h3>
                <p>Es indispensable contar con tu pasaporte vigente para cualquier trámite de viaje.</p>
                <div class="agency-box"><strong>🤝 Recomendación:</strong><br>Te sugerimos solicitar cita en las oficinas de pasaportes de tu localidad.</div>
                <p>Regresa cuando lo tengas listo.</p>
                <button onclick="avanzarPaso(2)">¡Ya lo tengo!</button>
            `; 
            break;

        case 4: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🏆</div>
                <h3>Expediente de Viaje Iniciado</h3>
                <p>Comenzaremos con el llenado del <b>Cuestionario de Solicitud de Visa</b> para ${paisActual}.</p>
                <button onclick="avanzarPaso(5)">Comenzar Cuestionario</button>
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

            html = `<p style="text-transform: uppercase; font-size: 13px; color: #666; margin-bottom:0; font-weight:bold;">Cuestionario: Pregunta ${idx + 1} de ${cuestionarioBase.length}</p>
                    <p style="color: var(--color-acento); font-weight:bold; margin-top:5px; font-size:12px;">▶ SECCIÓN: ${q.categoria} (${paisLimpio})</p>
                    <h3 style="text-align: left; margin-top:5px;">${preguntaTexto}</h3>`;

            if (q.tipo === "direccion_mx") {
                html += `
                    <div class="cp-container"><label>1. Código Postal:</label><div class="cp-row"><input type="number" id="cp_input" placeholder="Ej. 80000" onkeyup="if(this.value.length === 5) buscarCP()"><button type="button" class="btn-buscar" onclick="buscarCP()">Buscar</button></div>
                    <div id="direccion_detalles" style="display:none; border-top: 1px solid #ccc; padding-top: 15px;"><p id="msg_estado" style="font-size: 14px; font-weight: bold; margin: 0 0 10px 0;"></p><label>2. Colonia:</label><select id="colonia_select"></select><label style="margin-top: 10px; display:block;">3. Calle y Número:</label><input type="text" id="calle_input" placeholder="Ej. Calle 123"></div>
                    ${respuestaPrevia ? `<p style="font-size:13px; color:var(--color-primario);"><b>Guardado:</b><br>${respuestaPrevia}</p>` : ''}</div>`;
            }
            else if (q.tipo === "nombre_nacimiento_combo") {
                let d = {nombreCompleto: "", fechaNacimiento: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Nombre(s) y Apellidos Completos:</label>
                    <input type="text" id="per_nombre" value="${d.nombreCompleto}" placeholder="Escríbelos exactamente como en tu pasaporte">
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. Fecha de Nacimiento:</label>
                    <input type="date" id="per_fecha" value="${d.fechaNacimiento}">
                `;
            }
            else if (q.tipo === "lugar_nacionalidad_combo") {
                let d = {municipio: "", nac_sino: "", nac_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Municipio de Nacimiento:</label>
                    <input type="text" id="lug_municipio" value="${d.municipio || ''}" placeholder="Ej. Culiacán / Monterrey / Guadalajara">
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. ¿Tiene alguna otra nacionalidad?:</label>
                    <select id="lug_nac_sino" onchange="document.getElementById('div_lug_nac').style.display = this.value === 'Sí' ? 'block' : 'none'">
                        <option value="">Selecciona una opción...</option>
                        <option value="Sí" ${d.nac_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                        <option value="No" ${d.nac_sino === 'No' ? 'selected' : ''}>No</option>
                    </select>
                    <div id="div_lug_nac" style="display: ${d.nac_sino === 'Sí' ? 'block' : 'none'}; margin-top: 8px;">
                        <label style="font-size:13px; color: var(--color-primario);">Especifica cuál o cuáles otras nacionalidades tienes:</label>
                        <input type="text" id="lug_nac_det" value="${d.nac_det || ''}" placeholder="Ej. Española / Estadounidense">
                    </div>
                `;
            }
            else if (q.tipo === "contacto_redes_combo") {
                let d = {telefonos: "", redes: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Teléfono de Casa y Celular:</label>
                    <input type="text" id="cnt_telefonos" value="${d.telefonos || ''}" placeholder="Ej. Cel: 6671234567 / Casa: 6677123456">
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. Redes Sociales (Facebook, Instagram, etc.):</label>
                    <textarea id="cnt_redes" placeholder="Escribe tu usuario exacto o enlace (Ej. facebook.com/juanperez, instagram.com/juanperez)...">${d.redes || ''}</textarea>
                `;
            }
            else if (q.tipo === "esposo_combo") {
                let d = {nombre: "", fecha: "", lugar: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Nombre Completo con Apellidos:</label>
                    <input type="text" id="esp_nombre" value="${d.nombre || ''}" placeholder="Ej. María Josefa López Pérez">
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. Fecha de Nacimiento:</label>
                    <input type="date" id="esp_fecha" value="${d.fecha || ''}">

                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">3. Lugar de Nacimiento:</label>
                    <input type="text" id="esp_lugar" value="${d.lugar || ''}" placeholder="Ej. Ciudad Valles, San Luis Potosí">
                `;
            }
            else if (q.tipo === "padres_combo") {
                let d = {nombres: "", ocupacion: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Nombres y Fechas de Nacimiento de Padre y Madre:</label>
                    <textarea id="pad_nombres" placeholder="Ej. Juan Pérez (01/Ene/1960) y María López (05/May/1962)...">${d.nombres}</textarea>
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. ¿A qué se dedican sus padres?:</label>
                    <textarea id="pad_ocupacion" placeholder="Ej. Mi padre es comerciante y mi madre es ama de casa (o fallecidos)...">${d.ocupacion}</textarea>
                `;
            }
            else if (q.tipo === "educacion_combo") {
                let datosEdu = {nivel: "", especialidad: "", escuelas: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { datosEdu = JSON.parse(respuestaPrevia); } catch(e){} }
                
                let requiereEspecialidad = ["Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado"].includes(datosEdu.nivel);

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Nivel de Estudios:</label>
                    <select id="edu_nivel" style="margin-top:5px; margin-bottom:15px;" onchange="
                        let req = ['Carrera Técnica', 'Licenciatura / Ingeniería', 'Maestría', 'Doctorado'].includes(this.value);
                        document.getElementById('div_especialidad').style.display = req ? 'block' : 'none';
                    ">
                        <option value="">Selecciona una opción...</option>
                        ${["Primaria", "Secundaria", "Preparatoria / Bachillerato", "Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado", "Ninguno"].map(o => `<option value="${o}" ${datosEdu.nivel === o ? 'selected':''}>${o}</option>`).join('')}
                    </select>
                    
                    <div id="div_especialidad" style="display: ${requiereEspecialidad ? 'block' : 'none'};">
                        <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block; color: var(--color-primario);">2. Especialidad / Carrera:</label>
                        <input type="text" id="edu_especialidad" value="${datosEdu.especialidad && datosEdu.especialidad !== 'No aplica' ? datosEdu.especialidad : ''}" placeholder="Ej. Ing. en Sistemas">
                    </div>

                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">3. Instituciones a las que asistió:</label>
                    <textarea id="edu_escuelas" placeholder="Nombre de la escuela, domicilio completo y fechas...">${datosEdu.escuelas}</textarea>`;
            }
            else if (q.tipo === "empresa_combo") {
                let d = {nombre: "", direccion: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Nombre de la Empresa o Institución:</label>
                    <input type="text" id="emp_nombre" value="${d.nombre}" placeholder="Ej. Grupo Dportenis / Freelance / Ama de casa">
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. Dirección Completa y Teléfono:</label>
                    <textarea id="emp_direccion" placeholder="Calle, número, colonia, ciudad, estado y teléfono de contacto...">${d.direccion}</textarea>
                `;
            }
            else if (q.tipo === "puesto_combo") {
                let d = {puesto: "", antiguedad: "", funciones: "", sueldo: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Puesto u Ocupación Principal:</label>
                    <input type="text" id="pst_nombre" value="${d.puesto}" placeholder="Ej. Desarrollador Senior / Estudiante">
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. Antigüedad en el puesto (en años):</label>
                    <input type="number" id="pst_antiguedad" value="${d.antiguedad}" placeholder="Ej. 5">

                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">3. Sueldo Mensual Bruto (sin deducciones):</label>
                    <input type="text" id="pst_sueldo" value="${d.sueldo}" placeholder="Ej. $25,000 MXN">

                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">4. Descripción breve de Funciones:</label>
                    <textarea id="pst_funciones" placeholder="Describe tus tareas diarias usando oraciones completas...">${d.funciones}</textarea>
                `;
            }
            else if (q.tipo === "plan_viaje_combo") {
                let d = {motivo: "", fecha: "", tiempo: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Motivo Principal de su Viaje:</label>
                    <textarea id="pln_motivo" placeholder="Ej. Vacaciones, conocer casinos y teatros...">${d.motivo}</textarea>
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. Fecha Aproximada para Viajar:</label>
                    <input type="date" id="pln_fecha" value="${d.fecha}">

                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">3. Tiempo que Permanecerá en el Destino:</label>
                    <input type="text" id="pln_tiempo" value="${d.tiempo}" placeholder="Ej. 7 días / 2 semanas">
                `;
            }
            else if (q.tipo === "logistica_combo") {
                let d = {hospedaje: "", quienPaga: "", acompanantes_sino: "", acompanantes_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Lugar de Hospedaje en el Destino:</label>
                    <textarea id="log_hospedaje" placeholder="Nombre del hotel o dirección de familiares/amigos...">${d.hospedaje}</textarea>
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. Quién Cubre los Gastos de su Viaje:</label>
                    <textarea id="log_quienPaga" placeholder="Ej. Yo mismo / Empresa / Nombre del familiar...">${d.quienPaga}</textarea>

                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">3. ¿Hay personas que viajan con usted?:</label>
                    <select id="log_acompanantes_sino" onchange="document.getElementById('div_log_acompanantes').style.display = this.value === 'Sí' ? 'block' : 'none'">
                        <option value="">Selecciona una opción...</option>
                        <option value="Sí" ${d.acompanantes_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                        <option value="No" ${d.acompanantes_sino === 'No' ? 'selected' : ''}>No</option>
                    </select>
                    <div id="div_log_acompanantes" style="display: ${d.acompanantes_sino === 'Sí' ? 'block' : 'none'}; margin-top: 8px;">
                        <label style="font-size:13px; color: var(--color-primario);">Ingresa los nombres completos y parentesco de tus acompañantes:</label>
                        <textarea id="log_acompanantes_det" placeholder="Escribe los nombres y parentesco aquí...">${d.acompanantes_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "contactos_combo") {
                let d = {
                    cercanos_sino: "", cercanos_det: "",
                    otros_sino: "", otros_det: "",
                    viajes_sino: "", viajes_det: ""
                };

                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { 
                    try { d = JSON.parse(respuestaPrevia); } catch(e){} 
                }

                html += `
                    <!-- PREGUNTA 1: FAMILIARES CERCANOS -->
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">
                        1. ¿Tiene Esposo(a), Padres, Hermanos o Hijos en ${paisLimpio}?:
                    </label>
                    <select id="cnt_cercanos_sino" onchange="document.getElementById('div_cnt_cercanos').style.display = this.value === 'Sí' ? 'block' : 'none'">
                        <option value="">Selecciona una opción...</option>
                        <option value="Sí" ${d.cercanos_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                        <option value="No" ${d.cercanos_sino === 'No' ? 'selected' : ''}>No</option>
                    </select>
                    <div id="div_cnt_cercanos" style="display: ${d.cercanos_sino === 'Sí' ? 'block' : 'none'}; margin-top: 8px;">
                        <label style="font-size:13px; color: var(--color-primario);">Especifica nombre completo y estatus migratorio:</label>
                        <textarea id="cnt_cercanos_det" placeholder="Escribe los detalles aquí...">${d.cercanos_det || ''}</textarea>
                    </div>

                    <!-- PREGUNTA 2: OTROS FAMILIARES -->
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">
                        2. ¿Tiene algún otro familiar viviendo en ${paisLimpio}?:
                    </label>
                    <select id="cnt_otros_sino" onchange="document.getElementById('div_cnt_otros').style.display = this.value === 'Sí' ? 'block' : 'none'">
                        <option value="">Selecciona una opción...</option>
                        <option value="Sí" ${d.otros_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                        <option value="No" ${d.otros_sino === 'No' ? 'selected' : ''}>No</option>
                    </select>
                    <div id="div_cnt_otros" style="display: ${d.otros_sino === 'Sí' ? 'block' : 'none'}; margin-top: 8px;">
                        <label style="font-size:13px; color: var(--color-primario);">Especifica nombres y parentesco (tíos, primos, etc.):</label>
                        <textarea id="cnt_otros_det" placeholder="Escribe los detalles aquí...">${d.otros_det || ''}</textarea>
                    </div>

                    <!-- PREGUNTA 3: VIAJES INTERNACIONALES -->
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">
                        3. En los últimos 5 años ¿ha viajado a otro país diferente al tuyo o al destino?:
                    </label>
                    <select id="cnt_viajes_sino" onchange="document.getElementById('div_cnt_viajes').style.display = this.value === 'Sí' ? 'block' : 'none'">
                        <option value="">Selecciona una opción...</option>
                        <option value="Sí" ${d.viajes_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                        <option value="No" ${d.viajes_sino === 'No' ? 'selected' : ''}>No</option>
                    </select>
                    <div id="div_cnt_viajes" style="display: ${d.viajes_sino === 'Sí' ? 'block' : 'none'}; margin-top: 8px;">
                        <label style="font-size:13px; color: var(--color-primario);">Especifica qué países visitaste y fechas aproximadas:</label>
                        <textarea id="cnt_viajes_det" placeholder="Escribe los detalles aquí...">${d.viajes_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "pasaporte_combo") {
                let d = {lugarEmision: "", robo_sino: "", robo_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }

                html += `
                    <label style="font-size:14px; font-weight:bold; margin-top:10px; display:block;">1. Lugar de Emisión de su Pasaporte:</label>
                    <input type="text" id="psp_emision" value="${d.lugarEmision || ''}" placeholder="Ej. Durango / Culiacán / CDMX">
                    
                    <label style="font-size:14px; font-weight:bold; margin-top:15px; display:block;">2. ¿Alguna vez le han robado o extraviado un pasaporte?:</label>
                    <select id="psp_robo_sino" onchange="document.getElementById('div_psp_robo').style.display = this.value === 'Sí' ? 'block' : 'none'">
                        <option value="">Selecciona una opción...</option>
                        <option value="Sí" ${d.robo_sino === 'Sí' ? 'selected' : ''}>Sí</option>
                        <option value="No" ${d.robo_sino === 'No' ? 'selected' : ''}>No</option>
                    </select>
                    <div id="div_psp_robo" style="display: ${d.robo_sino === 'Sí' ? 'block' : 'none'}; margin-top: 8px;">
                        <label style="font-size:13px; color: var(--color-primario);">Detalla el año y las circunstancias del robo o extravío:</label>
                        <textarea id="psp_robo_det" placeholder="Escribe los detalles aquí...">${d.robo_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "sino_texto") {
                let isSi = respuestaPrevia.startsWith("Sí");
                let detalle = isSi ? respuestaPrevia.replace("Sí: ", "") : "";
                let isNo = respuestaPrevia === "No";
                
                html += `
                    <select id="respuestaDS160_sino" onchange="document.getElementById('div_detalle').style.display = this.value === 'Sí' ? 'block' : 'none'">
                        <option value="">Selecciona una opción...</option>
                        <option value="Sí" ${isSi ? 'selected' : ''}>Sí</option>
                        <option value="No" ${isNo ? 'selected' : ''}>No</option>
                    </select>
                    <div id="div_detalle" style="display: ${isSi ? 'block' : 'none'}; margin-top: 10px; text-align: left;">
                        <label style="font-size:14px; font-weight:bold; display:block; color: var(--color-primario);">Especifique los detalles requeridos:</label>
                        <textarea id="respuestaDS160_detalle" placeholder="Escriba todos los detalles aquí de forma clara...">${detalle}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "select") {
                html += `<select id="respuestaDS160"><option value="">Selecciona una opción...</option>${q.opciones.map(opt => `<option value="${opt}" ${respuestaPrevia === opt ? 'selected' : ''}>${opt}</option>`).join('')}</select>`;
            } else if (q.tipo === "textarea") {
                html += `<textarea id="respuestaDS160" placeholder="Escribe tu respuesta detallada aquí...">${respuestaPrevia}</textarea>`;
            } else {
                html += `<input type="${q.tipo}" id="respuestaDS160" value="${respuestaPrevia}" placeholder="Escribe tu respuesta aquí...">`;
            }

            html += `<div class="tip-box"><strong>💡 Consejo:</strong><br>${q.tip}</div>
                     <button onclick="guardarRespuestaCuestionario('${q.id}', '${q.tipo}')">Guardar y Siguiente</button>
                     ${idx > 0 ? `<button onclick="retrocederPreguntaDS()" class="secondary">Regresar a la anterior</button>` : ''}`;
            break;

        case 6: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📝</div>
                <h3>¡Cuestionario Terminado!</h3>
                <p>Destino: <b>${paisActual}</b></p>
                <button class="success" onclick="avanzarPaso(7)">Siguiente: Citas y Seguimiento</button>
            `; 
            break;

        case 7: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📸</div>
                <h3>Paso 3: Cita de Registro Biométrico / Toma de Fotos</h3>
                <button onclick="avanzarPaso(8)">Sí, ya la agendé</button>
                <button onclick="avanzarPaso(9)" class="secondary">No, aún no</button>
            `; 
            break;

        case 8: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📅</div>
                <h3>Tus Datos de Biométricos</h3>
                <div class="tip-box"><strong>💡 Tip:</strong> Registro de huellas digitales y fotografía oficial.</div>
                <input type="date" id="cita_fecha" value="${appData.cita_cas?.fecha || ''}">
                <input type="time" id="cita_hora" value="${appData.cita_cas?.hora || ''}">
                <input type="text" id="cita_lugar" placeholder="Ciudad y Dirección de la cita" value="${appData.cita_cas?.lugar || ''}">
                <button onclick="guardarCita('cas', 10)">Guardar Cita</button>
            `; 
            break;

        case 9: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🤝</div>
                <div class="agency-box"><strong>🤝 Recomendación:</strong><br>Te recomendamos consultar las fechas disponibles en el portal oficial o con un asesor de confianza.</div>
                <p>Vuelve cuando tengas tu fecha.</p>
                <button onclick="avanzarPaso(8)">¡Ya agendé!</button>
                <button onclick="avanzarPaso(10)" class="secondary">Dejar pendiente y avanzar</button>
            `; 
            break;

        case 10: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🏛️</div>
                <h3>Paso 4: Cita Consular / Entrevista de Visado</h3>
                <button onclick="avanzarPaso(11)">Sí, ya la tengo</button>
                <button onclick="avanzarPaso(12)" class="secondary">No, aún no</button>
            `; 
            break;

        case 11: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📍</div>
                <h3>Datos de la Cita Consular</h3>
                <div class="warning-box"><strong>⚠️ ATENCIÓN:</strong> Verifica las fechas de tu cita y la ubicación exacta del consulado o embajada.</div>
                <input type="date" id="cita_fecha" value="${appData.cita_entrevista?.fecha || ''}">
                <input type="time" id="cita_hora" value="${appData.cita_entrevista?.hora || ''}">
                <input type="text" id="cita_lugar" placeholder="Ciudad y Consulado/Embajada" value="${appData.cita_entrevista?.lugar || ''}">
                <button onclick="guardarCita('entrevista', 13)">Guardar Cita</button>
            `; 
            break;

        case 12: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🔎</div>
                <div class="agency-box"><strong>🤝 Recomendación:</strong><br>Monitorea constantemente el sistema oficial en caso de que se liberen fechas más cercanas.</div>
                <p>Regresa cuando tengas tus fechas listas.</p>
                <button onclick="avanzarPaso(11)">¡Ya agendé!</button>
                <button onclick="avanzarPaso(13)" class="secondary">Finalizar sin fecha de cita</button>
            `; 
            break;

        case 13: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🎉</div>
                <h3 style="color: var(--color-primario);">¡Expediente Completo!</h3>
                <p>Tienes toda la información organizada para tu solicitud de visa a <b>${paisActual}</b>.</p>
                
                <div class="interview-tips">
                    <h4 style="margin-top:0; color:#01579b;">🎯 Consejos para tu Entrevista de Visa</h4>
                    <p><strong>¿Cómo prepararte para tu entrevista?</strong></p>
                    <p>✅ <strong>Respuestas claras:</strong> Responde con seguridad y asegurando que tus datos verbales coincidan exactamente con tu cuestionario. Demuestra arraigo a tu país (trabajo, escuela, familia).</p>
                    <p>❌ <strong>Evita errores:</strong> No des explicaciones innecesariamente largas que generen dudas o contradicciones.</p>
                    <p style="background: #bbdefb; padding: 10px; border-radius: 5px; color: #000;">💡 <strong>Consejo Clave:</strong> Mantén respuestas <b>cortas, honestas y directas</b>.</p>
                </div>

                <button class="success" onclick="mostrarResumen()">Ver mi Expediente y Compartir</button>
                <button class="secondary" onclick="regresarAUltimaPregunta()" style="margin-top: 10px;">✏️ Editar última pregunta</button>
            `; 
            break;
    }

    if (pasoForzado === null && appData.paso_actual > 0) {
        html = `
            <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">👋</div>
            <h3>¡Bienvenido de vuelta!</h3>
            <p>Solicitud de viaje en proceso para: <b>${paisActual}</b></p>
            <button class="success" onclick="renderScreen(${appData.paso_actual})">🚀 Continuar Mi Expediente</button>
            <br>
            <button onclick="resetApp()" style="background:none; color:red; border:none; margin-top:20px; text-decoration:underline; cursor:pointer;">Borrar mis datos y empezar de nuevo</button>
        `;
    }
    document.getElementById('screenContent').innerHTML = html;
}

// --- LÓGICA DE GUARDADO ---

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
        if(ca.length < 3) { mostrarAlerta("La calle debe ser más descriptiva."); return; }
        v = `${ca}, Col. ${co}, C.P. ${cp}`;
    } 
    else if(tipo === "nombre_nacimiento_combo") {
        let nom = document.getElementById('per_nombre').value.trim();
        let fch = document.getElementById('per_fecha').value.trim();

        if(!nom || !fch) { mostrarAlerta("Por favor completa tu nombre y fecha de nacimiento."); return; }
        if(nom.length < 3) { mostrarAlerta("Por favor ingresa tu nombre y apellidos completos."); return; }

        let hoy = new Date(); hoy.setHours(0,0,0,0);
        let fechaIngresada = new Date(fch + 'T00:00:00');
        if (fechaIngresada >= hoy) { mostrarAlerta("La fecha de nacimiento no puede ser hoy ni futura."); return; }

        v = JSON.stringify({nombreCompleto: nom, fechaNacimiento: fch});
    }
    else if(tipo === "lugar_nacionalidad_combo") {
        let mun = document.getElementById('lug_municipio').value.trim();
        let nac_sino = document.getElementById('lug_nac_sino').value;
        let nac_det = document.getElementById('lug_nac_det').value.trim();

        if(!mun || !nac_sino) { mostrarAlerta("Por favor ingresa tu municipio y responde si tienes otra nacionalidad."); return; }
        if(mun.length < 2) { mostrarAlerta("Por favor especifica bien tu municipio."); return; }

        if(nac_sino === 'Sí' && nac_det.length < 2) {
            mostrarAlerta("Seleccionaste que tienes otra nacionalidad. Por favor especifica cuál es.");
            return;
        }

        v = JSON.stringify({
            municipio: mun,
            nac_sino: nac_sino,
            nac_det: nac_sino === 'Sí' ? nac_det : 'No'
        });
    }
    else if(tipo === "contacto_redes_combo") {
        let tel = document.getElementById('cnt_telefonos').value.trim();
        let red = document.getElementById('cnt_redes').value.trim();

        if(!tel || !red) { mostrarAlerta("Por favor completa tus números de teléfono y tus redes sociales."); return; }
        if(tel.length < 5 || red.length < 3) { mostrarAlerta("Por favor proporciona datos de contacto válidos y descriptivos."); return; }

        v = JSON.stringify({telefonos: tel, redes: red});
    }
    else if(tipo === "esposo_combo") {
        let nom = document.getElementById('esp_nombre').value.trim();
        let fch = document.getElementById('esp_fecha').value.trim();
        let lug = document.getElementById('esp_lugar').value.trim();

        if(!nom || !fch || !lug) { mostrarAlerta("Por favor completa el nombre, fecha y lugar de nacimiento de su esposo(a)."); return; }
        if(nom.length < 3 || lug.length < 3) { mostrarAlerta("Por favor proporciona información más descriptiva."); return; }

        let hoy = new Date(); hoy.setHours(0,0,0,0);
        let fechaIngresada = new Date(fch + 'T00:00:00');
        if (fechaIngresada >= hoy) { mostrarAlerta("La fecha de nacimiento no puede ser hoy ni futura."); return; }

        v = JSON.stringify({nombre: nom, fecha: fch, lugar: lug});
    }
    else if(tipo === "padres_combo") {
        let nom = document.getElementById('pad_nombres').value.trim();
        let ocu = document.getElementById('pad_ocupacion').value.trim();

        if(!nom || !ocu) { mostrarAlerta("Por favor completa los nombres y ocupaciones de ambos padres."); return; }
        if(nom.length < 5 || ocu.length < 3) { mostrarAlerta("Por favor detalla mejor la información de tus padres."); return; }
        v = JSON.stringify({nombres: nom, ocupacion: ocu});
    }
    else if(tipo === "educacion_combo") {
        let n = document.getElementById('edu_nivel').value;
        let esc = document.getElementById('edu_escuelas').value.trim();
        
        let requiereEspecialidad = ["Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado"].includes(n);
        let e = requiereEspecialidad ? document.getElementById('edu_especialidad').value.trim() : "No aplica";

        if(!n || !esc) { mostrarAlerta("Por favor completa el Nivel de Estudios y las Instituciones."); return; }
        if(requiereEspecialidad && e.length < 3) { mostrarAlerta("Por favor especifica tu Especialidad o Carrera de forma clara."); return; }

        v = JSON.stringify({nivel: n, especialidad: e, escuelas: esc});
    }
    else if(tipo === "empresa_combo") {
        let nom = document.getElementById('emp_nombre').value.trim();
        let dir = document.getElementById('emp_direccion').value.trim();
        if(!nom || !dir) { mostrarAlerta("Por favor, ingresa el nombre de la empresa y la dirección completa."); return; }
        v = JSON.stringify({nombre: nom, direccion: dir});
    }
    else if(tipo === "puesto_combo") {
        let pst = document.getElementById('pst_nombre').value.trim();
        let ant = document.getElementById('pst_antiguedad').value.trim();
        let sld = document.getElementById('pst_sueldo').value.trim();
        let fnc = document.getElementById('pst_funciones').value.trim();

        if(!pst || !ant || !sld || !fnc) { mostrarAlerta("Por favor completa todos los campos de tu puesto actual."); return; }
        v = JSON.stringify({puesto: pst, antiguedad: ant, sueldo: sld, funciones: fnc});
    }
    else if(tipo === "plan_viaje_combo") {
        let mot = document.getElementById('pln_motivo').value.trim();
        let fch = document.getElementById('pln_fecha').value.trim();
        let tmp = document.getElementById('pln_tiempo').value.trim();

        if(!mot || !fch || !tmp) { mostrarAlerta("Por favor completa todos los datos de tu plan de viaje."); return; }
        
        let hoy = new Date(); hoy.setHours(0,0,0,0);
        let fechaIngresada = new Date(fch + 'T00:00:00');
        if (fechaIngresada <= hoy) { mostrarAlerta("La fecha de viaje debe ser posterior a hoy."); return; }

        v = JSON.stringify({motivo: mot, fecha: fch, tiempo: tmp});
    }
    else if(tipo === "logistica_combo") {
        let hsp = document.getElementById('log_hospedaje').value.trim();
        let pag = document.getElementById('log_quienPaga').value.trim();
        let acm_sino = document.getElementById('log_acompanantes_sino').value;
        let acm_det = document.getElementById('log_acompanantes_det').value.trim();

        if(!hsp || !pag || !acm_sino) { 
            mostrarAlerta("Por favor completa hospedaje, quién paga y si viajas acompañado."); 
            return; 
        }

        if(acm_sino === 'Sí' && acm_det.length < 3) {
            mostrarAlerta("Seleccionaste que viajas acompañado. Por favor ingresa los detalles de tus acompañantes.");
            return;
        }

        v = JSON.stringify({
            hospedaje: hsp, 
            quienPaga: pag, 
            acompanantes_sino: acm_sino, 
            acompanantes_det: acm_sino === 'Sí' ? acm_det : 'No'
        });
    }
    else if(tipo === "contactos_combo") {
        let crc_sino = document.getElementById('cnt_cercanos_sino').value;
        let crc_det  = document.getElementById('cnt_cercanos_det').value.trim();

        let otr_sino = document.getElementById('cnt_otros_sino').value;
        let otr_det  = document.getElementById('cnt_otros_det').value.trim();

        let vjs_sino = document.getElementById('cnt_viajes_sino').value;
        let vjs_det  = document.getElementById('cnt_viajes_det').value.trim();

        if(!crc_sino || !otr_sino || !vjs_sino) { 
            mostrarAlerta("Por favor responde Sí o No a las 3 preguntas."); 
            return; 
        }

        if(crc_sino === 'Sí' && crc_det.length < 3) {
            mostrarAlerta("Por favor ingresa los detalles de tus familiares cercanos.");
            return;
        }
        if(otr_sino === 'Sí' && otr_det.length < 3) {
            mostrarAlerta("Por favor ingresa los detalles de tus otros familiares.");
            return;
        }
        if(vjs_sino === 'Sí' && vjs_det.length < 3) {
            mostrarAlerta("Por favor ingresa los detalles de tus viajes anteriores.");
            return;
        }

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

        if(!emi || !rbo_sino) { 
            mostrarAlerta("Por favor completa el lugar de emisión y responde si te han robado o extraviado un pasaporte."); 
            return; 
        }

        if(rbo_sino === 'Sí' && rbo_det.length < 3) {
            mostrarAlerta("Seleccionaste 'Sí' en robo o extravío. Por favor detalla el año y circunstancia.");
            return;
        }

        v = JSON.stringify({
            lugarEmision: emi, 
            robo_sino: rbo_sino, 
            robo_det: rbo_sino === 'Sí' ? rbo_det : 'No'
        });
    }
    else if(tipo === "sino_texto") {
        let sino = document.getElementById('respuestaDS160_sino').value;
        if(!sino) { mostrarAlerta("Por favor, selecciona Sí o No."); return; }
        
        if(sino === "Sí") {
            let detalle = document.getElementById('respuestaDS160_detalle').value.trim();
            if(detalle.length < 3) { 
                mostrarAlerta("Seleccionaste 'Sí'. Por favor especifica los detalles requeridos de forma clara."); 
                return; 
            }
            v = `Sí: ${detalle}`;
        } else {
            v = "No";
        }
    }
    else {
        v = document.getElementById('respuestaDS160').value.trim();
        if(!v) { mostrarAlerta("Escribe o selecciona una respuesta para continuar."); return; }
        
        if((tipo === "text" || tipo === "textarea") && v.length < 3) {
            mostrarAlerta("Tu respuesta es muy corta. Por favor proporciona información más detallada.");
            return;
        }

        if(tipo === "email") {
            let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!re.test(v)) { mostrarAlerta("El correo electrónico no es válido."); return; }
        }
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
    
    if(!f || !l || l.length < 3) { mostrarAlerta("Debes ingresar la fecha y dirección completa."); return; }
    
    let hoy = new Date(); hoy.setHours(0,0,0,0);
    let fechaCita = new Date(f + 'T00:00:00');
    if (fechaCita < hoy) { mostrarAlerta("La fecha de la cita no puede estar en el pasado."); return; }

    t==='cas' ? appData.cita_cas={fecha:f, hora:h, lugar:l} : appData.cita_entrevista={fecha:f, hora:h, lugar:l};
    avanzarPaso(p);
}

function resetApp() { 
    if(confirm("¿Estás seguro de borrar todos tus datos y reiniciar tu solicitud?")) { 
        localStorage.removeItem('datosVisado'); 
        appData = { paso_actual:0, pais_destino:"Estados Unidos 🇺🇸", folio_pasaporte:"", ds160_index:0, respuestas_ds160:{}, cita_cas:null, cita_entrevista:null }; 
        renderScreen(0); 
    } 
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

// --- PANTALLA DE RESUMEN FINAL ---

function mostrarResumen() {
    let paisActual = appData.pais_destino || "Estados Unidos 🇺🇸";
    let paisLimpio = obtenerNombrePaisLimpio(paisActual);
    
    let txtWhats = `*===== EXPEDIENTE DE SOLICITUD DE VISA =====*\n`;
    txtWhats += `*DESTINO DE VIAJE:* ${paisLimpio}\n`;
    txtWhats += `*FOLIO PASAPORTE:* ${appData.folio_pasaporte}\n\n`;
    
    let htmlVista = `<h2 style="color:var(--color-primario); border-bottom: 2px solid var(--color-primario); padding-bottom:10px;">Expediente de Solicitud de Visa</h2>`;
    htmlVista += `<p><b>País Destino:</b> ${paisLimpio} <span onclick="editarPasoDesdeResumen(0)" style="float:right; cursor:pointer; font-size:16px;" title="Editar País">✏️</span></p>`;
    htmlVista += `<p><b>Folio Pasaporte:</b> ${appData.folio_pasaporte} <span onclick="editarPasoDesdeResumen(2)" style="float:right; cursor:pointer; font-size:16px;" title="Editar">✏️</span></p>`;
    
    let categoriaActual = "";

    for (const [clave, valorOrig] of Object.entries(appData.respuestas_ds160)) {
        let p = cuestionarioBase.find(item => item.id === clave);
        
        if(valorOrig === "No aplica") continue;
        
        let valor = valorOrig;
        if(typeof valor === 'string' && valor.startsWith("{")) {
            try {
                let obj = JSON.parse(valor);
                if(obj.nombreCompleto !== undefined && obj.fechaNacimiento !== undefined) {
                    valor = `Nombre Completo: ${obj.nombreCompleto}\nFecha de Nacimiento: ${obj.fechaNacimiento}`;
                } else if(obj.municipio !== undefined) {
                    valor = `Municipio de Nacimiento: ${obj.municipio}\nOtra Nacionalidad: ${obj.nac_sino}` + (obj.nac_sino === 'Sí' ? ` (${obj.nac_det})` : '');
                } else if(obj.telefonos !== undefined && obj.redes !== undefined) {
                    valor = `Teléfonos: ${obj.telefonos}\nRedes Sociales: ${obj.redes}`;
                } else if(obj.nombre !== undefined && obj.fecha !== undefined && obj.lugar !== undefined) {
                    valor = `Nombre Esposo(a): ${obj.nombre}\nFecha de Nacimiento: ${obj.fecha}\nLugar de Nacimiento: ${obj.lugar}`;
                } else if(obj.nivel !== undefined) {
                    valor = `Nivel: ${obj.nivel}\nEspecialidad: ${obj.especialidad || 'N/A'}\nInstituciones:\n${obj.escuelas}`;
                } else if(obj.nombre !== undefined && obj.direccion !== undefined) {
                    valor = `Empresa/Institución: ${obj.nombre}\nDirección: ${obj.direccion}`;
                } else if(obj.puesto !== undefined) {
                    valor = `Puesto: ${obj.puesto}\nAntigüedad: ${obj.antiguedad} años\nSueldo Mensual: ${obj.sueldo}\nFunciones:\n${obj.funciones}`;
                } else if(obj.motivo !== undefined) {
                    valor = `Motivo del Viaje: ${obj.motivo}\nFecha Aproximada: ${obj.fecha}\nTiempo de Permanencia: ${obj.tiempo}`;
                } else if(obj.acompanantes_sino !== undefined) {
                    valor = `Hospedaje: ${obj.hospedaje}\nQuién Paga: ${obj.quienPaga}\nViaja Acompañado: ${obj.acompanantes_sino}` + (obj.acompanantes_sino === 'Sí' ? ` (${obj.acompanantes_det})` : '');
                } else if(obj.hospedaje !== undefined) {
                    valor = `Hospedaje: ${obj.hospedaje}\nQuién Paga: ${obj.quienPaga}\nAcompañantes: ${obj.acompanantes}`;
                } else if(obj.cercanos_sino !== undefined) {
                    valor = `Familiares Cercanos: ${obj.cercanos_sino}` + (obj.cercanos_sino === 'Sí' ? ` (${obj.cercanos_det})` : '') +
                            `\nOtros Familiares: ${obj.otros_sino}` + (obj.otros_sino === 'Sí' ? ` (${obj.otros_det})` : '') +
                            `\nViajes Últimos 5 Años: ${obj.viajes_sino}` + (obj.viajes_sino === 'Sí' ? ` (${obj.viajes_det})` : '');
                } else if(obj.familiaresCercanos !== undefined) {
                    valor = `Familiares Cercanos en Destino: ${obj.familiaresCercanos}\nOtros Familiares en Destino: ${obj.otrosFamiliares}\nViajes Últimos 5 Años: ${obj.viajesAnteriores}`;
                } else if(obj.robo_sino !== undefined) {
                    valor = `Lugar de Emisión del Pasaporte: ${obj.lugarEmision}\nPasaporte Robado/Extraviado: ${obj.robo_sino}` + (obj.robo_sino === 'Sí' ? ` (${obj.robo_det})` : '');
                } else if(obj.lugarEmision !== undefined) {
                    valor = `Lugar de Emisión del Pasaporte: ${obj.lugarEmision}\nHistorial de Robo/Extravío: ${obj.robo}`;
                } else if(obj.nombres !== undefined && obj.ocupacion !== undefined) {
                    valor = `Nombres y Fechas de Nacimiento:\n${obj.nombres}\nOcupación:\n${obj.ocupacion}`;
                }
            } catch(e) {}
        }

        if(p && p.categoria !== categoriaActual) {
            categoriaActual = p.categoria;
            txtWhats += `\n*--- SECCIÓN: ${categoriaActual} ---*\n`;
            htmlVista += `<h3 style="background:var(--color-acento); color:#fff; padding:5px; border-radius:3px; margin-top:20px;">${categoriaActual}</h3>`;
        }

        let preguntaTXT = p ? formatearTextoPregunta(p.pregunta, paisLimpio) : clave.toUpperCase();
        
        txtWhats += `*${preguntaTXT}*\n${valor}\n\n`;
        
        htmlVista += `<div style="margin-bottom: 12px; border-bottom: 1px dashed #ccc; padding-bottom: 5px;">
                        <p style="margin:0; font-size:12px; color:#555;">
                            ${preguntaTXT}
                            <span onclick="editarPreguntaDesdeResumen('${clave}')" style="float:right; cursor:pointer; font-size:16px; margin-left: 10px;" title="Editar esta respuesta">✏️</span>
                        </p>
                        <p style="margin:0; font-size:16px; font-weight:bold; color:#000; white-space: pre-wrap;">${valor}</p>
                      </div>`;
    }

    if(appData.cita_cas) {
        let datosCas = `Fecha: ${appData.cita_cas.fecha} | Hora: ${appData.cita_cas.hora}\nLugar: ${appData.cita_cas.lugar}`;
        txtWhats += `*--- CITA REGISTRO / BIOMÉTRICOS ---*\n${datosCas}\n\n`;
        htmlVista += `<h3 style="color:var(--color-primario); margin-top:20px;">Cita de Datos Biométricos <span onclick="editarPasoDesdeResumen(8)" style="float:right; cursor:pointer; font-size:16px;" title="Editar Cita">✏️</span></h3>
                      <p><b>${appData.cita_cas.fecha} - ${appData.cita_cas.hora}</b><br>${appData.cita_cas.lugar}</p>`;
    }
    if(appData.cita_entrevista) {
        let datosEnt = `Fecha: ${appData.cita_entrevista.fecha} | Hora: ${appData.cita_entrevista.hora}\nLugar: ${appData.cita_entrevista.lugar}`;
        txtWhats += `*--- CITA CONSULAR / EMBANJADA ---*\n${datosEnt}\n\n`;
        htmlVista += `<h3 style="color:var(--color-primario);">Cita Consular <span onclick="editarPasoDesdeResumen(11)" style="float:right; cursor:pointer; font-size:16px;" title="Editar Cita">✏️</span></h3>
                      <p><b>${appData.cita_entrevista.fecha} - ${appData.cita_entrevista.hora}</b><br>${appData.cita_entrevista.lugar}</p>`;
    }

    let textoCodificado = encodeURIComponent(txtWhats);

    let pantallaFinal = `
        <div id="areaImprimir" style="text-align:left; background:#fff; padding:15px; border:1px solid #ccc; max-height: 400px; overflow-y: auto; border-radius: 5px;">
            ${htmlVista}
        </div>
        <button class="success" onclick="window.print()" style="margin-top:15px;">
            🖨️ Guardar PDF / Imprimir Expediente
        </button>
        <button class="whatsapp" onclick="window.open('https://api.whatsapp.com/send?text=${textoCodificado}', '_blank')">
            💬 Compartir por WhatsApp
        </button>
        <button class="secondary" onclick="renderScreen(13)">Volver atrás</button>
        
        <hr style="border: 0; border-top: 1px dashed #ccc; margin: 25px 0 15px 0;">
        <p style="font-size: 14px; color: #666; margin-bottom: 10px;">¿Terminaste con este expediente?</p>
        <button onclick="resetApp()" style="background: var(--color-acento); color: white;">🗑️ Crear Nueva Solicitud</button>
    `;
    
    document.getElementById('screenContent').innerHTML = pantallaFinal;
}

// Inicializar la aplicación
renderScreen();
