// ==========================================
// CORE.JS - SISTEMA DE EXPEDIENTE DE VIAJE Y VISA
// ==========================================

// --- DEFINICIÓN DEL CUESTIONARIO BASE ---
// Las preguntas que mencionan "PAÍS DESTINO" se adaptan dinámicamente en pantalla.
const cuestionarioBase = [
    // --- SECCIÓN 1: PERSONAL ---
    { categoria: "PERSONAL", id: "email", pregunta: "E-MAIL:", tip: "Usa un correo al que tengas acceso diario.", tipo: "email" },
    { categoria: "PERSONAL", id: "nombre_completo", pregunta: "NOMBRE Y APELLIDOS COMPLETOS:", tip: "Exactamente como aparecen en tu pasaporte.", tipo: "text" },
    { categoria: "PERSONAL", id: "fecha_nacimiento", pregunta: "FECHA DE NACIMIENTO:", tip: "Abre el calendario y selecciona tu fecha.", tipo: "date" },
    { categoria: "PERSONAL", id: "estado_civil", pregunta: "ESTADO CIVIL:", tip: "Selecciona una opción. (Si eliges 'Soltero', omitiremos los datos de cónyuge).", tipo: "select", opciones: ["Soltero(a)", "Casado(a)", "Divorciado(a)", "Viudo(a)", "Unión Libre"] },
    
    // Omitidas si es Soltero o Divorciado
    { categoria: "PERSONAL", id: "nombre_esposo", pregunta: "NOMBRE COMPLETO DE SU ESPOSO(A) / EX-ESPOSO(A):", tip: "⚠️ OBLIGATORIO: Nombre completo con apellidos.", tipo: "text" },
    { categoria: "PERSONAL", id: "fecha_esposo", pregunta: "FECHA DE NACIMIENTO DE SU ESPOSO(A):", tip: "Abre el calendario y selecciona la fecha exacta.", tipo: "date" },
    { categoria: "PERSONAL", id: "lugar_esposo", pregunta: "LUGAR DE NACIMIENTO DE SU ESPOSO(A):", tip: "Ej. Ciudad Valles, San Luis Potosí.", tipo: "text" },
    
    { categoria: "PERSONAL", id: "datos_hijos", pregunta: "¿TIENE HIJOS?", tip: "Si tienes, captura nombres completos y fechas de nacimiento.", tipo: "sino_texto" },
    { categoria: "PERSONAL", id: "municipio_nacimiento", pregunta: "MUNICIPIO DE NACIMIENTO:", tip: "Verifica en tu acta de nacimiento.", tipo: "text" },
    { categoria: "PERSONAL", id: "otra_nacionalidad", pregunta: "¿TIENES ALGUNA OTRA NACIONALIDAD?", tip: "Si respondes Sí, especifica cuál.", tipo: "sino_texto" },
    
    { categoria: "PERSONAL", id: "historial_previo_eu", pregunta: "¿HA VIAJADO O HA TENIDO VISA DEL PAÍS DESTINO ANTERIORMENTE?", tip: "Si eliges 'No', omitiremos preguntas sobre permisos locales, visas previas e historial de viajes a ese destino.", tipo: "select", opciones: ["Sí, he viajado o he tenido visa", "No, nunca he ido y es mi primera visa"] },
    
    // Omitidas si NO ha viajado antes
    { categoria: "PERSONAL", id: "ssn_tax_id", pregunta: "EN EL PAÍS DESTINO ¿CUENTAS CON REGISTRO, SEGURO O ID LOCAL?", tip: "Si respondes Sí, anota el número.", tipo: "sino_texto" },

    { categoria: "PERSONAL", id: "direccion_completa", pregunta: "DIRECCIÓN COMPLETA DE RESIDENCIA ACTUAL:", tip: "Ingresa tu Código Postal para buscar tu colonia.", tipo: "direccion_mx" },
    { categoria: "PERSONAL", id: "telefonos", pregunta: "TELÉFONO DE CASA Y CELULAR:", tip: "Números donde puedan localizarte actualmente.", tipo: "text" },
    
    // --- REDES SOCIALES ---
    { categoria: "PERSONAL", id: "redes_sociales", pregunta: "REDES SOCIALES (FACEBOOK, INSTAGRAM, ETC):", tip: "⚠️ IMPORTANTE: Escribe tu usuario exacto o enlace (Ej. facebook.com/juanperez). Los consulados verifican estas cuentas.", tipo: "textarea" },
    { categoria: "PERSONAL", id: "historial_contacto", pregunta: "EN LOS ÚLTIMOS 5 AÑOS ¿HAS USADO OTROS TELÉFONOS/EMAILS?", tip: "Si respondes Sí, anótalos detalladamente.", tipo: "sino_texto" },
    
    // --- DATOS DE PADRES ---
    { categoria: "PERSONAL", id: "datos_padres", pregunta: "NOMBRE Y FECHA DE NACIMIENTO DE SU PADRE Y MADRE:", tip: "⚠️ OBLIGATORIO: Nombres completos (con apellidos) y fechas de nacimiento de AMBOS. Aunque hayan fallecido.", tipo: "textarea" },
    { categoria: "PERSONAL", id: "ocupacion_padres", pregunta: "¿A QUÉ SE DEDICAN SUS PADRES?", tip: "Aunque estén jubilados o fallecidos, especificarlo.", tipo: "textarea" },
    { categoria: "PERSONAL", id: "idiomas", pregunta: "IDIOMAS QUE DOMINA AL 100%:", tip: "Ej. Español, Inglés.", tipo: "text" },

    // --- SECCIÓN 2: PROFESIONAL ---
    { categoria: "PROFESIONAL", id: "educacion_completa", pregunta: "INFORMACIÓN ACADÉMICA:", tip: "Captura tu nivel, tu especialidad (si aplica) y tus instituciones.", tipo: "educacion_combo" },
    { categoria: "PROFESIONAL", id: "ocupacion", pregunta: "OCUPACIÓN PRINCIPAL O PUESTO ACTUAL:", tip: "Ej. Vendedor, Estudiante, Ama de casa, Ingeniero.", tipo: "text" },
    { categoria: "PROFESIONAL", id: "anos_experiencia", pregunta: "¿CUÁNTOS AÑOS DE EXPERIENCIA TIENE EN SU PROFESIÓN/OFICIO?", tip: "Escribe solo el número de años ejerciendo. Ej. 10", tipo: "number" },
    { categoria: "PROFESIONAL", id: "sueldo", pregunta: "SUELDO MENSUAL SIN DEDUCCIONES (BRUTO):", tip: "Debe coincidir con tus recibos de nómina o ingresos comprobables.", tipo: "text" },
    { categoria: "PROFESIONAL", id: "empresa_actual", pregunta: "EMPRESA O INSTITUCIÓN DONDE LABORA/ESTUDIA:", tip: "Nombre, Fecha de ingreso y Teléfono.", tipo: "textarea" },
    { categoria: "PROFESIONAL", id: "antiguedad_empleo", pregunta: "¿QUÉ ANTIGÜEDAD TIENE EN SU EMPLEO ACTUAL? (EN AÑOS):", tip: "Especifica el número de años. Ej. 5. Si tienes 5 o más, omitiremos empleos anteriores.", tipo: "number" },
    
    // --- FUNCIONES DE TRABAJO ---
    { categoria: "PROFESIONAL", id: "funciones_trabajo", pregunta: "DESCRIBA BREVEMENTE SUS FUNCIONES:", tip: "Usa oraciones completas. Ej. 'Atención a clientes y gestión de inventario'. Evita palabras sueltas.", tipo: "textarea" },
    { categoria: "PROFESIONAL", id: "direccion_empresa", pregunta: "DIRECCIÓN COMPLETA DE TRABAJO Ó ESCUELA:", tip: "Calle, número, colonia, ciudad y estado.", tipo: "textarea" },
    
    // Omitida si antigüedad >= 5 años
    { categoria: "PROFESIONAL", id: "empleos_anteriores", pregunta: "MENCIONE SUS ÚLTIMOS 2 EMPLEOS ANTERIORES:", tip: "Empresa, dirección, tel, cargo, jefe y fechas.", tipo: "textarea" },
    
    { categoria: "PROFESIONAL", id: "organizaciones", pregunta: "¿PERTENECE A UNA ORGANIZACIÓN SOCIAL O PROFESIONAL?:", tip: "Colegios, sindicatos, clubes, etc.", tipo: "sino_texto" },
    
    // --- PROPIEDADES (ARRAIGO) ---
    { categoria: "PROFESIONAL", id: "propiedades", pregunta: "¿TIENE PROPIEDADES A SU NOMBRE EN SU PAÍS DE ORIGEN?", tip: "Ej. 'Casa propia y 1 vehículo'. Demuestra tus lazos de arraigo con tu país.", tipo: "sino_texto" },

    // --- SECCIÓN 3: CONSULADO Y VIAJE ---
    { categoria: "CONSULADO Y VIAJE", id: "motivo_visita", pregunta: "¿CUÁL ES EL MOTIVO PRINCIPAL DE SU VIAJE?", tip: "Sé muy específico. Ej. 'Turismo, vacaciones y compras'.", tipo: "textarea" },
    { categoria: "CONSULADO Y VIAJE", id: "lugar_pasaporte", pregunta: "LUGAR DE EMISIÓN DE SU PASAPORTE:", tip: "Revisa la página principal de tu pasaporte.", tipo: "text" },
    { categoria: "CONSULADO Y VIAJE", id: "robo_pasaporte", pregunta: "¿ALGUNA VEZ LE HAN ROBADO/EXTRAVIADO UN PASAPORTE?", tip: "Si respondes Sí, especifica año y detalles.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "fecha_viaje", pregunta: "FECHA APROXIMADA PARA VIAJAR:", tip: "Abre el calendario y pon una fecha futura proyectada.", tipo: "date" },
    { categoria: "CONSULADO Y VIAJE", id: "tiempo_estadía", pregunta: "TIEMPO QUE PERMANECERÁ EN EL DESTINO:", tip: "Ejemplo: 1 semana, 15 días.", tipo: "text" },
    { categoria: "CONSULADO Y VIAJE", id: "hospedaje", pregunta: "LUGAR DE HOSPEDAJE EN EL DESTINO:", tip: "Nombre del Hotel o Nombre y Dirección del familiar/amigo.", tipo: "textarea" },
    { categoria: "CONSULADO Y VIAJE", id: "quien_paga", pregunta: "QUIÉN CUBRE LOS GASTOS DE SU VIAJE:", tip: "Nombre, parentesco y teléfono (o 'Yo mismo').", tipo: "textarea" },
    { categoria: "CONSULADO Y VIAJE", id: "acompanantes", pregunta: "¿HAY PERSONAS QUE VIAJAN CON USTED?", tip: "Si viajas con alguien, anota su nombre y parentesco.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "familiares_cercanos_eu", pregunta: "¿TIENE ESPOSO(A), PADRES, HERMANOS O HIJOS EN EL PAÍS DESTINO?", tip: "Nombre completo y Estatus de residencia/visa.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "otros_familiares_eu", pregunta: "¿TIENE ALGÚN OTRO FAMILIAR VIVIENDO EN EL PAÍS DESTINO?", tip: "Tíos, primos, etc.", tipo: "sino_texto" },

    // --- OMITIDAS SI ES PRIMERA VEZ QUE VIAJA ---
    { categoria: "CONSULADO Y VIAJE", id: "visitas_anteriores", pregunta: "¿HA ESTADO ALGUNA VEZ EN EL PAÍS DESTINO? (FECHAS):", tip: "Revisa los sellos de tu pasaporte anterior.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "licencia_eu", pregunta: "¿TIENE LICENCIA DE CONDUCIR O ID DEL PAÍS DESTINO?:", tip: "Si tienes, anota el número.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "visas_anteriores", pregunta: "¿ALGUNA VEZ LE HAN OTORGADO UNA VISA DE ESTE PAÍS?:", tip: "Fecha de emisión y si te tomaron datos biométricos.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "visa_robada", pregunta: "¿ALGUNA VEZ LE ROBARON, EXTRAVIÓ O REVOCARON UNA VISA?:", tip: "Explica brevemente y pon el año.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "problemas_legales_eu", pregunta: "¿ALGUNA VEZ HA TENIDO ALGÚN INCONVENIENTE DE ENTRADA O TRÁMITE PREVIO EN ESE PAÍS?", tip: "Sé 100% honesto.", tipo: "sino_texto" },
    
    // --- SEGURIDAD GENERAL ---
    { categoria: "CONSULADO Y VIAJE", id: "viajes_internacionales", pregunta: "EN LOS ÚLTIMOS 5 AÑOS ¿HA VIAJADO A OTRO PAÍS DIFERENTE AL TUYO O AL DESTINO?:", tip: "Menciona los países. Si es ninguno pon NO.", tipo: "sino_texto" },
    { categoria: "CONSULADO Y VIAJE", id: "seguridad", pregunta: "¿TIENE EXPERIENCIA EN ARMAS DE FUEGO O HA SERVIDO AL EJÉRCITO?:", tip: "Si respondes Sí, detalla tu experiencia.", tipo: "sino_texto" }
];

// --- CONSTANTES DE OMISIÓN ---
const PREGUNTAS_A_OMITIR_PRIMERA_VEZ = ['ssn_tax_id', 'visitas_anteriores', 'licencia_eu', 'visas_anteriores', 'visa_robada', 'problemas_legales_eu'];
const PREGUNTAS_A_OMITIR_SOLTERO = ['nombre_esposo', 'fecha_esposo', 'lugar_esposo'];

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
        let antiguedad = parseInt(appData.respuestas_ds160['antiguedad_empleo']);
        if (!isNaN(antiguedad) && antiguedad >= 5) return true;
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

    switch(step) {
        case 0: 
            html = `
                <h2 style="color: var(--color-primario); margin-top:0;">¡Bienvenido a Dossier160! ✈️</h2>
                
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

        case 1: html = `<h3>Paso 1: Pasaporte</h3><p>¿Ya cuentas con tu pasaporte vigente para viajar a ${paisActual}?</p><button onclick="avanzarPaso(2)">Sí, ya lo tengo</button><button onclick="avanzarPaso(3)" class="secondary">No, aún no</button>`; break;
        case 2: html = `<h3>¡Excelente!</h3><p>Captura el folio de tu pasaporte:</p><input type="text" id="inputFolio" value="${appData.folio_pasaporte || ''}"><button onclick="guardarInputGeneral('folio_pasaporte', 'inputFolio', 4)">Guardar Folio</button>`; break;
        case 3: html = `<h3>Paso Pendiente</h3><p>Es indispensable contar con tu pasaporte vigente para cualquier trámite de viaje.</p><div class="agency-box"><strong>🤝 Recomendación:</strong><br>Te sugerimos solicitar cita en las oficinas de pasaportes de tu localidad.</div><p>Regresa cuando lo tengas listo.</p><button onclick="avanzarPaso(2)">¡Ya lo tengo!</button>`; break;
        case 4: html = `<h3>Expediente de Viaje Iniciado 🏆</h3><p>Comenzaremos con el llenado del <b>Cuestionario de Solicitud de Visa</b> para ${paisActual}.</p><button onclick="avanzarPaso(5)">Comenzar Cuestionario</button>`; break;

        case 5:
            let idx = appData.ds160_index;
            if (idx >= cuestionarioBase.length) { 
                avanzarPaso(6); 
                return; 
            }

            let q = cuestionarioBase[idx];
            let respuestaPrevia = appData.respuestas_ds160[q.id] || "";

            let preguntaTexto = q.pregunta.replace("EL PAÍS DESTINO", paisActual).replace("PAÍS DESTINO", paisActual);

            html = `<p style="text-transform: uppercase; font-size: 13px; color: #666; margin-bottom:0; font-weight:bold;">Cuestionario: Pregunta ${idx + 1} de ${cuestionarioBase.length}</p>
                    <p style="color: var(--color-acento); font-weight:bold; margin-top:5px; font-size:12px;">▶ SECCIÓN: ${q.categoria} (${paisActual})</p>
                    <h3 style="text-align: left; margin-top:5px;">${preguntaTexto}</h3>`;

            if (q.tipo === "direccion_mx") {
                html += `
                    <div class="cp-container"><label>1. Código Postal:</label><div class="cp-row"><input type="number" id="cp_input" placeholder="Ej. 80000" onkeyup="if(this.value.length === 5) buscarCP()"><button type="button" class="btn-buscar" onclick="buscarCP()">Buscar</button></div>
                    <div id="direccion_detalles" style="display:none; border-top: 1px solid #ccc; padding-top: 15px;"><p id="msg_estado" style="font-size: 14px; font-weight: bold; margin: 0 0 10px 0;"></p><label>2. Colonia:</label><select id="colonia_select"></select><label style="margin-top: 10px; display:block;">3. Calle y Número:</label><input type="text" id="calle_input" placeholder="Ej. Calle 123"></div>
                    ${respuestaPrevia ? `<p style="font-size:13px; color:var(--color-primario);"><b>Guardado:</b><br>${respuestaPrevia}</p>` : ''}</div>`;
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

        case 6: html = `<h3>¡Cuestionario Terminado! 📝✅</h3><p>Destino: <b>${paisActual}</b></p><button class="success" onclick="avanzarPaso(7)">Siguiente: Citas y Seguimiento</button>`; break;
        case 7: html = `<h3>Paso 3: Cita de Registro Biométrico / Toma de Fotos</h3><button onclick="avanzarPaso(8)">Sí, ya la agendé</button><button onclick="avanzarPaso(9)" class="secondary">No, aún no</button>`; break;
        case 8: html = `<h3>Tus Datos de Biométricos</h3><div class="tip-box"><strong>💡 Tip:</strong> Registro de huellas digitales y fotografía oficial.</div><input type="date" id="cita_fecha" value="${appData.cita_cas?.fecha || ''}"><input type="time" id="cita_hora" value="${appData.cita_cas?.hora || ''}"><input type="text" id="cita_lugar" placeholder="Ciudad y Dirección de la cita" value="${appData.cita_cas?.lugar || ''}"><button onclick="guardarCita('cas', 10)">Guardar Cita</button>`; break;
        case 9: html = `<div class="agency-box"><strong>🤝 Recomendación:</strong><br>Te recomendamos consultar las fechas disponibles en el portal oficial o con un asesor de confianza.</div><p>Vuelve cuando tengas tu fecha.</p><button onclick="avanzarPaso(8)">¡Ya agendé!</button><button onclick="avanzarPaso(10)" class="secondary">Dejar pendiente y avanzar</button>`; break;
        case 10: html = `<h3>Paso 4: Cita Consular / Entrevista de Visado</h3><button onclick="avanzarPaso(11)">Sí, ya la tengo</button><button onclick="avanzarPaso(12)" class="secondary">No, aún no</button>`; break;
        case 11: html = `<h3>Datos de la Cita Consular</h3><div class="warning-box"><strong>⚠️ ATENCIÓN:</strong> Verifica las fechas de tu cita y la ubicación exacta del consulado o embajada.</div><input type="date" id="cita_fecha" value="${appData.cita_entrevista?.fecha || ''}"><input type="time" id="cita_hora" value="${appData.cita_entrevista?.hora || ''}"><input type="text" id="cita_lugar" placeholder="Ciudad y Consulado/Embajada" value="${appData.cita_entrevista?.lugar || ''}"><button onclick="guardarCita('entrevista', 13)">Guardar Cita</button>`; break;
        case 12: html = `<div class="agency-box"><strong>🤝 Recomendación:</strong><br>Monitorea constantemente el sistema oficial en caso de que se liberen fechas más cercanas.</div><p>Regresa cuando tengas tus fechas listas.</p><button onclick="avanzarPaso(11)">¡Ya agendé!</button><button onclick="avanzarPaso(13)" class="secondary">Finalizar sin fecha de cita</button>`; break;
        
        case 13: 
            html = `
                <h3 style="color: var(--color-primario);">¡Expediente Completo! 🏆🎉</h3>
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
        html = `<h3>¡Bienvenido de vuelta! 👋</h3>
                <p>Solicitud de viaje en proceso para: <b>${paisActual}</b></p>
                <button class="success" onclick="renderScreen(${appData.paso_actual})">🚀 Continuar Mi Expediente</button>
                <br>
                <button onclick="resetApp()" style="background:none; color:red; border:none; margin-top:20px; text-decoration:underline; cursor:pointer;">Borrar mis datos y empezar de nuevo</button>`;
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
    else if(tipo === "educacion_combo") {
        let n = document.getElementById('edu_nivel').value;
        let esc = document.getElementById('edu_escuelas').value.trim();
        
        let requiereEspecialidad = ["Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado"].includes(n);
        let e = requiereEspecialidad ? document.getElementById('edu_especialidad').value.trim() : "No aplica";

        if(!n || !esc) { mostrarAlerta("Por favor completa el Nivel de Estudios y las Instituciones."); return; }
        if(requiereEspecialidad && e.length < 3) { mostrarAlerta("Por favor especifica tu Especialidad o Carrera de forma clara."); return; }

        v = JSON.stringify({nivel: n, especialidad: e, escuelas: esc});
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
        if (id === "fecha_nacimiento" || id === "fecha_esposo") {
            let hoy = new Date(); hoy.setHours(0,0,0,0);
            let fechaIngresada = new Date(v + 'T00:00:00');
            if (fechaIngresada >= hoy) { mostrarAlerta("La fecha de nacimiento no puede ser hoy ni futura."); return; }
        }
        if (id === "fecha_viaje") {
            let hoy = new Date(); hoy.setHours(0,0,0,0);
            let fechaIngresada = new Date(v + 'T00:00:00');
            if (fechaIngresada <= hoy) { mostrarAlerta("La fecha de viaje debe ser posterior a hoy."); return; }
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
    
    let txtWhats = `*===== EXPEDIENTE DE SOLICITUD DE VISA =====*\n`;
    txtWhats += `*DESTINO DE VIAJE:* ${paisActual}\n`;
    txtWhats += `*FOLIO PASAPORTE:* ${appData.folio_pasaporte}\n\n`;
    
    let htmlVista = `<h2 style="color:var(--color-primario); border-bottom: 2px solid var(--color-primario); padding-bottom:10px;">Expediente de Solicitud de Visa</h2>`;
    htmlVista += `<p><b>País Destino:</b> ${paisActual} <span onclick="editarPasoDesdeResumen(0)" style="float:right; cursor:pointer; font-size:16px;" title="Editar País">✏️</span></p>`;
    htmlVista += `<p><b>Folio Pasaporte:</b> ${appData.folio_pasaporte} <span onclick="editarPasoDesdeResumen(2)" style="float:right; cursor:pointer; font-size:16px;" title="Editar">✏️</span></p>`;
    
    let categoriaActual = "";

    for (const [clave, valorOrig] of Object.entries(appData.respuestas_ds160)) {
        let p = cuestionarioBase.find(item => item.id === clave);
        
        if(valorOrig === "No aplica") continue;
        
        let valor = valorOrig;
        if(typeof valor === 'string' && valor.startsWith("{")) {
            try {
                let obj = JSON.parse(valor);
                if(obj.nivel) valor = `Nivel: ${obj.nivel}\nEspecialidad: ${obj.especialidad || 'N/A'}\nInstituciones:\n${obj.escuelas}`;
            } catch(e) {}
        }

        if(p && p.categoria !== categoriaActual) {
            categoriaActual = p.categoria;
            txtWhats += `\n*--- SECCIÓN: ${categoriaActual} ---*\n`;
            htmlVista += `<h3 style="background:var(--color-acento); color:#fff; padding:5px; border-radius:3px; margin-top:20px;">${categoriaActual}</h3>`;
        }

        let preguntaTXT = p ? p.pregunta.replace("EL PAÍS DESTINO", paisActual).replace("PAÍS DESTINO", paisActual) : clave.toUpperCase();
        
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
