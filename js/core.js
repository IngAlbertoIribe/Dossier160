// ==========================================
// CORE.JS - SISTEMA DE EXPEDIENTE DE VIAJE Y VISA (BILINGÜE ES/EN)
// ==========================================

// Diccionario de Traducciones de la Interfaz
const i18n = {
    es: {
        title: "Dossier160",
        welcome_title: "¡Bienvenido a Dossier160!",
        welcome_desc_title: "📋 Tu Asistente para Solicitud de Visa y Viajes:",
        welcome_desc: "Esta aplicación te ayuda a recolectar, organizar y validar toda la información necesaria para tus formularios de visa y expedientes de viaje.",
        select_lang: "Selecciona tu idioma / Select your language:",
        select_country: "¿A qué país deseas viajar?",
        btn_start: "Iniciar Cuestionario",
        step1_title: "Paso 1: Pasaporte",
        step1_desc: "¿Ya cuentas con tu pasaporte vigente para viajar a {pais}?",
        btn_yes_passport: "Sí, ya lo tengo",
        btn_no_passport: "No, aún no",
        step2_title: "¡Excelente!",
        step2_desc: "Captura el folio de tu pasaporte:",
        btn_save_folio: "Guardar Folio",
        step3_title: "Paso Pendiente",
        step3_desc: "Es indispensable contar con tu pasaporte vigente para cualquier trámite de viaje.",
        step3_tip: "🤝 Recomendación:\nTe sugerimos solicitar cita en las oficinas de pasaportes de tu localidad.",
        step3_btn: "¡Ya lo tengo!",
        step4_title: "Expediente de Viaje Iniciado",
        step4_desc: "Comenzaremos con el llenado del Cuestionario de Solicitud de Visa para {pais}.",
        step4_btn: "Comenzar Cuestionario",
        q_label_step: "Pregunta {current} de {total}",
        q_label_sec: "▶ SECCIÓN: {categoria} ({pais})",
        btn_save_next: "Guardar y Siguiente",
        btn_back: "Regresar",
        tip_label: "💡 Consejo:",
        step6_title: "¡Cuestionario Terminado!",
        step6_desc: "Destino: {pais}",
        step6_btn: "Siguiente: Citas y Seguimiento",
        step7_title: "Paso 3: Cita de Registro Biométrico / Fotos",
        btn_yes_agenda: "Sí, ya la agendé",
        btn_no_agenda: "No, aún no",
        step8_title: "Tus Datos de Biométricos",
        step8_tip: "💡 Tip: Registro de huellas digitales y fotografía oficial.",
        lbl_date: "Fecha:",
        lbl_time: "Hora:",
        lbl_place: "Lugar/Dirección:",
        btn_save_appointment: "Guardar Cita",
        step9_agency: "🤝 Recomendación:\nConsulta las fechas disponibles en el portal oficial o con un asesor de confianza.",
        step9_btn_no: "Dejar pendiente y avanzar",
        step10_title: "Paso 4: Cita Consular / Entrevista de Visado",
        step11_title: "Datos de la Cita Consular",
        step11_warning: "⚠️ ATENCIÓN: Verifica las fechas de tu cita y la ubicación del consulado.",
        lbl_embassy: "Lugar/Embajada:",
        step12_agency: "🤝 Recomendación:\nMonitorea constantemente el sistema oficial en caso de que se liberen fechas más cercanas.",
        step12_btn_no: "Finalizar sin fecha de cita",
        step13_title: "¡Expediente Completo!",
        step13_desc: "Tienes toda la información organizada para tu solicitud de visa a {pais}.",
        tips_interview_title: "🎯 Consejos para tu Entrevista de Visa",
        tip_interview_1: "✅ <strong>Respuestas claras:</strong> Asegúrate de que tus datos verbales coincidan exactamente con tu cuestionario.",
        tip_interview_2: "❌ <strong>Evita errores:</strong> No des explicaciones innecesariamente largas que generen dudas.",
        btn_view_exp: "Ver mi Expediente y Compartir",
        btn_edit_last: "✏️ Editar última pregunta",
        welcome_back_title: "¡Bienvenido de vuelta!",
        welcome_back_desc: "Solicitud de viaje en proceso para: {pais}",
        btn_continue: "🚀 Continuar Mi Expediente",
        btn_reset_all: "Borrar mis datos y empezar de nuevo",
        modal_alert_title: "⚠️ Aviso",
        btn_accept: "Aceptar",
        btn_confirm_delete: "Sí, borrar",
        btn_cancel: "No, cancelar",
        msg_confirm_delete: "¿Estás seguro de borrar todos tus datos y reiniciar tu solicitud?",
        msg_enter_required: "Por favor, ingresa el dato solicitado.",
        msg_cp_searching: "Buscando...",
        msg_cp_found: "Ubicación: {state} ✅",
        msg_cp_not_found: "CP no encontrado.",
        summary_title: "Expediente de Solicitud de Visa",
        lbl_country: "País Destino:",
        lbl_passport_folio: "Folio Pasaporte:",
        lbl_biometrics_appt: "Cita Biométricos",
        lbl_consular_appt: "Cita Consular",
        btn_print: "🖨️ Imprimir / Guardar PDF",
        btn_whatsapp: "💬 Compartir por WhatsApp",
        btn_go_back: "Volver atrás",
        btn_new_request: "🗑️ Crear Nueva Solicitud",
        select_default: "Selecciona...",
        opt_yes: "Sí",
        opt_no: "No",
        disclaimer_gov_title: "⚠️ AVISO GUBERNAMENTAL (DISCLAIMER):",
        disclaimer_gov_desc: "Esta aplicación es una herramienta independiente y NO representa, ni está afiliada a ninguna entidad gubernamental. La información oficial para visas debe ser consultada directamente en sitios gubernamentales oficiales (ej. travel.state.gov).",
        btn_search_cp: "Buscar",
        select_purpose: "¿Cuál es el motivo principal de tu viaje?",
        opt_tourism: "Turismo / Vacaciones / Visita Médica",
        opt_business: "Negocios / Conferencias",
        opt_study: "Estudios / Intercambio",
        opt_work: "Trabajo / Empleo temporal",
        opt_other: "Otro"
    },
    en: {
        title: "Dossier160",
        welcome_title: "Welcome to Dossier160!",
        welcome_desc_title: "📋 Your Visa Application and Travel Assistant:",
        welcome_desc: "This app helps you collect, organize, and validate all the information needed for your visa forms and travel dossiers.",
        select_lang: "Select your language / Selecciona tu idioma:",
        select_country: "Which country do you wish to travel to?",
        btn_start: "Start Questionnaire",
        step1_title: "Step 1: Passport",
        step1_desc: "Do you already have a valid passport to travel to {pais}?",
        btn_yes_passport: "Yes, I have it",
        btn_no_passport: "No, not yet",
        step2_title: "Excellent!",
        step2_desc: "Enter your passport number:",
        btn_save_folio: "Save Passport Number",
        step3_title: "Pending Step",
        step3_desc: "Having a valid passport is essential for any travel process.",
        step3_tip: "🤝 Recommendation:\nWe suggest scheduling an appointment at your local passport office.",
        step3_btn: "I have it now!",
        step4_title: "Travel Dossier Started",
        step4_desc: "We will begin filling out the Visa Application Questionnaire for {pais}.",
        step4_btn: "Start Questionnaire",
        q_label_step: "Question {current} of {total}",
        q_label_sec: "▶ SECTION: {categoria} ({pais})",
        btn_save_next: "Save & Next",
        btn_back: "Back",
        tip_label: "💡 Tip:",
        step6_title: "Questionnaire Completed!",
        step6_desc: "Destination: {pais}",
        step6_btn: "Next: Appointments & Follow-up",
        step7_title: "Step 3: Biometric Registration / Photos Appointment",
        btn_yes_agenda: "Yes, I scheduled it",
        btn_no_agenda: "No, not yet",
        step8_title: "Your Biometrics Appointment Details",
        step8_tip: "💡 Tip: Fingerprint registration and official photograph.",
        lbl_date: "Date:",
        lbl_time: "Time:",
        lbl_place: "Location/Address:",
        btn_save_appointment: "Save Appointment",
        step9_agency: "🤝 Recommendation:\nCheck available dates on the official portal or with a trusted advisor.",
        step9_btn_no: "Leave pending and proceed",
        step10_title: "Step 4: Consular Appointment / Visa Interview",
        step11_title: "Consular Appointment Details",
        step11_warning: "⚠️ WARNING: Check your appointment dates and consulate location.",
        lbl_embassy: "Location/Embassy:",
        step12_agency: "🤝 Recommendation:\nMonitors the official system constantly in case earlier dates open up.",
        step12_btn_no: "Finish without appointment date",
        step13_title: "Complete Dossier!",
        step13_desc: "You have all information organized for your visa application to {pais}.",
        tips_interview_title: "🎯 Tips for your Visa Interview",
        tip_interview_1: "✅ <strong>Clear answers:</strong> Make sure your verbal answers match your questionnaire exactly.",
        tip_interview_2: "❌ <strong>Avoid mistakes:</strong> Do not give unnecessarily long explanations that raise doubts.",
        btn_view_exp: "View Dossier & Share",
        btn_edit_last: "✏️ Edit last question",
        welcome_back_title: "Welcome back!",
        welcome_back_desc: "Travel application in process for: {pais}",
        btn_continue: "🚀 Continue My Dossier",
        btn_reset_all: "Delete my data and start over",
        modal_alert_title: "⚠️ Notice",
        btn_accept: "Accept",
        btn_confirm_delete: "Yes, delete",
        btn_cancel: "No, cancel",
        msg_confirm_delete: "Are you sure you want to delete all your data and restart your application?",
        msg_enter_required: "Please enter the requested information.",
        msg_cp_searching: "Searching...",
        msg_cp_found: "Location: {state} ✅",
        msg_cp_not_found: "ZIP code not found.",
        summary_title: "Visa Application Dossier",
        lbl_country: "Destination Country:",
        lbl_passport_folio: "Passport Number:",
        lbl_biometrics_appt: "Biometrics Appointment",
        lbl_consular_appt: "Consular Appointment",
        btn_print: "🖨️ Print / Save as PDF",
        btn_whatsapp: "💬 Share via WhatsApp",
        btn_go_back: "Go back",
        btn_new_request: "🗑️ Create New Application",
        select_default: "Select...",
        opt_yes: "Yes",
        opt_no: "No",
        disclaimer_gov_title: "⚠️ GOVERNMENT DISCLAIMER:",
        disclaimer_gov_desc: "This app is an independent tool and DOES NOT represent, nor is it affiliated with, any government entity. Official visa information must be consulted directly on official government websites (e.g., travel.state.gov).",
        btn_search_cp: "Search",
        select_purpose: "What is the primary purpose of your trip?",
        opt_tourism: "Tourism / Vacation / Medical Treatment",
        opt_business: "Business / Conferences",
        opt_study: "Study / Exchange",
        opt_work: "Work / Temporary Employment",
        opt_other: "Other"
    }
};

// Cuestionario Base Bilingüe
const cuestionarioBase = [
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "email", 
        pregunta: { es: "E-MAIL:", en: "E-MAIL:" }, 
        tip: { es: "Usa un correo al que tengas acceso diario.", en: "Use an email you access daily." }, 
        tipo: "email" 
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "nombre_nacimiento_combo", 
        pregunta: { es: "NOMBRE COMPLETO Y FECHA DE NACIMIENTO:", en: "FULL NAME AND DATE OF BIRTH:" }, 
        tip: { es: "Ingresa tu nombre exactamente como aparece en tu pasaporte y tu fecha de nacimiento.", en: "Enter your name exactly as it appears on your passport and your date of birth." }, 
        tipo: "nombre_nacimiento_combo" 
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "lugar_nacionalidad_combo", 
        pregunta: { es: "LUGAR DE NACIMIENTO Y OTRA NACIONALIDAD:", en: "PLACE OF BIRTH AND OTHER NATIONALITY:" }, 
        tip: { es: "Verifica tu municipio en tu acta de nacimiento e indica si posees otra nacionalidad.", en: "Check your birth city/municipality on your birth certificate and indicate if you hold another nationality." }, 
        tipo: "lugar_nacionalidad_combo" 
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "direccion_completa", 
        pregunta: { es: "DIRECCIÓN COMPLETA DE RESIDENCIA ACTUAL:", en: "FULL CURRENT RESIDENTIAL ADDRESS:" }, 
        tip: { es: "Ingresa tu Código Postal para buscar tu colonia.", en: "Enter your ZIP/Postal Code to find your neighborhood." }, 
        tipo: "direccion_mx" 
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "contacto_redes_combo", 
        pregunta: { es: "TELÉFONOS, REDES SOCIALES E HISTORIAL DE CONTACTO:", en: "PHONE NUMBERS, SOCIAL MEDIA & CONTACT HISTORY:" }, 
        tip: { es: "⚠️ IMPORTANTE: Números donde puedan localizarte, tus usuarios o enlaces exactos.", en: "⚠️ IMPORTANT: Phone numbers where you can be reached, exact usernames or profile links." }, 
        tipo: "contacto_redes_combo" 
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "propiedades", 
        pregunta: { es: "¿TIENE PROPIEDADES A SU NOMBRE EN SU PAÍS DE ORIGEN?", en: "DO YOU OWN PROPERTY IN YOUR HOME COUNTRY?" }, 
        tip: { es: "Ej. 'Casa propia y 1 vehículo'. Demuestra tus lazos de arraigo.", en: "E.g., 'Own house and 1 vehicle'. Demonstrates home country ties." }, 
        tipo: "sino_texto" 
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "estado_civil", 
        pregunta: { es: "ESTADO CIVIL:", en: "MARITAL STATUS:" }, 
        tip: { es: "Selecciona una opción.", en: "Select an option." }, 
        tipo: "select", 
        opciones: {
            es: ["Soltero(a)", "Casado(a)", "Divorciado(a)", "Viudo(a)", "Unión Libre"],
            en: ["Single", "Married", "Divorced", "Widowed", "Common Law / Domestic Partnership"]
        }
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "esposo_combo", 
        pregunta: { es: "INFORMACIÓN DE SU ESPOSO(A) / EX-ESPOSO(A):", en: "SPOUSE / FORMER SPOUSE INFORMATION:" }, 
        tip: { es: "⚠️ OBLIGATORIO: Nombre completo con apellidos, fecha y lugar de nacimiento.", en: "⚠️ MANDATORY: Full name, date, and place of birth." }, 
        tipo: "esposo_combo" 
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "datos_hijos", 
        pregunta: { es: "¿TIENE HIJOS?", en: "DO YOU HAVE CHILDREN?" }, 
        tip: { es: "Si tienes, captura nombres completos y fechas de nacimiento.", en: "If yes, enter their full names and dates of birth." }, 
        tipo: "sino_texto" 
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "historial_previo_eu", 
        pregunta: { es: "¿HA VIAJADO O HA TENIDO VISA DEL PAÍS DESTINO ANTERIORMENTE?", en: "HAVE YOU PREVIOUSLY TRAVELLED TO OR HELD A VISA FOR THE DESTINATION COUNTRY?" }, 
        tip: { es: "Selecciona una opción.", en: "Select an option." }, 
        tipo: "select", 
        opciones: {
            es: ["Sí, he viajado o he tenido visa", "No, nunca he ido y es mi primera visa"],
            en: ["Yes, I have travelled or held a visa", "No, I have never been and this is my first visa"]
        }
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "ssn_tax_id", 
        pregunta: { es: "EN EL PAÍS DESTINO ¿CUENTAS CON REGISTRO, SEGURO O ID LOCAL?", en: "IN THE DESTINATION COUNTRY, DO YOU HAVE A LOCAL REGISTRATION, SSN, OR TAX ID?" }, 
        tip: { es: "Si respondes Sí, anota el número.", en: "If yes, write down the number." }, 
        tipo: "sino_texto" 
    },
    { 
        categoria: { es: "PERSONAL", en: "PERSONAL" }, 
        id: "padres_combo", 
        pregunta: { es: "INFORMACIÓN DE SUS PADRES:", en: "PARENTS' INFORMATION:" }, 
        tip: { es: "⚠️ OBLIGATORIO: Nombres completos, fechas de nacimiento y ocupación de AMBOS padres.", en: "⚠️ MANDATORY: Full names, dates of birth, and occupation of BOTH parents." }, 
        tipo: "padres_combo" 
    },
    { 
        categoria: { es: "PROFESIONAL", en: "WORK / EDUCATION" }, 
        id: "educacion_completa", 
        pregunta: { es: "INFORMACIÓN ACADÉMICA:", en: "ACADEMIC INFORMATION:" }, 
        tip: { es: "Captura tu nivel, tu especialidad (si aplica) y tus instituciones.", en: "Capture your degree level, major/specialty (if applicable), and institutions." }, 
        tipo: "educacion_combo" 
    },
    { 
        categoria: { es: "PROFESIONAL", en: "WORK / EDUCATION" }, 
        id: "anos_experiencia", 
        pregunta: { es: "¿CUÁNTOS AÑOS DE EXPERIENCIA TIENE EN SU PROFESIÓN/OFICIO?", en: "HOW MANY YEARS OF EXPERIENCE DO YOU HAVE IN YOUR PROFESSION/TRADE?" }, 
        tip: { es: "Escribe solo el número de años ejerciendo.", en: "Type only the number of years working in your field." }, 
        tipo: "number" 
    },
    { 
        categoria: { es: "PROFESIONAL", en: "WORK / EDUCATION" }, 
        id: "empresa_y_direccion", 
        pregunta: { es: "DATOS DE LA EMPRESA O INSTITUCIÓN ACTUAL:", en: "CURRENT COMPANY OR INSTITUTION DETAILS:" }, 
        tip: { es: "Nombre de la empresa/escuela, teléfono y su domicilio completo.", en: "Company/School name, phone number, and full address." }, 
        tipo: "empresa_combo" 
    },
    { 
        categoria: { es: "PROFESIONAL", en: "WORK / EDUCATION" }, 
        id: "puesto_y_detalles", 
        pregunta: { es: "DETALLES DE SU PUESTO Y ACTIVIDADES:", en: "JOB POSITION AND DUTIES DETAILS:" }, 
        tip: { es: "Ingresa tu puesto, antigüedad, sueldo bruto y descripción de funciones.", en: "Enter your title, years of employment, gross salary, and job duties." }, 
        tipo: "puesto_combo" 
    },
    { 
        categoria: { es: "PROFESIONAL", en: "WORK / EDUCATION" }, 
        id: "empleos_anteriores", 
        pregunta: { es: "MENCIONE SUS ÚLTIMOS 2 EMPLEOS ANTERIORES:", en: "LIST YOUR LAST 2 PREVIOUS EMPLOYERS:" }, 
        tip: { es: "Empresa, dirección, tel, cargo, jefe y fechas.", en: "Company name, address, phone, job title, supervisor, and dates." }, 
        tipo: "textarea" 
    },
    { 
        categoria: { es: "PROFESIONAL", en: "WORK / EDUCATION" }, 
        id: "organizaciones", 
        pregunta: { es: "¿PERTENECE A UNA ORGANIZACIÓN SOCIAL O PROFESIONAL?:", en: "DO YOU BELONG TO ANY SOCIAL OR PROFESSIONAL ORGANIZATION?:" }, 
        tip: { es: "Colegios, sindicatos, clubes, etc.", en: "Associations, unions, clubs, etc." }, 
        tipo: "sino_texto" 
    },
    { 
        categoria: { es: "CONSULADO Y VIAJE", en: "TRAVEL & CONSULATE" }, 
        id: "plan_viaje_combo", 
        pregunta: { es: "PLAN DE VIAJE AL DESTINO:", en: "TRAVEL PLAN TO DESTINATION:" }, 
        tip: { es: "Motivo del viaje, fecha proyectada y días de estancia.", en: "Purpose of trip, estimated arrival date, and duration of stay." }, 
        tipo: "plan_viaje_combo" 
    },
    { 
        categoria: { es: "CONSULADO Y VIAJE", en: "TRAVEL & CONSULATE" }, 
        id: "logistica_viaje_combo", 
        pregunta: { es: "HOSPEDAJE Y FINANCIAMIENTO DEL VIAJE:", en: "ACCOMMODATION & TRIP FUNDING:" }, 
        tip: { es: "Lugar donde te hospedarás, quién cubre los gastos y si viajas acompañado.", en: "Where you will stay, who pays for the trip, and accompanying travelers." }, 
        tipo: "logistica_combo" 
    },
    { 
        categoria: { es: "CONSULADO Y VIAJE", en: "TRAVEL & CONSULATE" }, 
        id: "contactos_y_viajes_combo", 
        pregunta: { es: "CONTACTOS EN EL DESTINO Y VIAJES INTERNACIONALES:", en: "DESTINATION CONTACTS & INTERNATIONAL TRAVEL:" }, 
        tip: { es: "Familiares cercanos, otros familiares y viajes realizados en los últimos 5 años.", en: "Immediate relatives, other relatives, and international travel in the last 5 years." }, 
        tipo: "contactos_combo" 
    },
    { 
        categoria: { es: "CONSULADO Y VIAJE", en: "TRAVEL & CONSULATE" }, 
        id: "pasaporte_detalles_combo", 
        pregunta: { es: "DATOS DEL PASAPORTE Y ROBO/EXTRAVÍO:", en: "PASSPORT DETAILS & LOSS/STOLEN REPORT:" }, 
        tip: { es: "Lugar de emisión y si has tenido reportes de pasaporte perdido.", en: "Issuance location and if you have reported a lost/stolen passport." }, 
        tipo: "pasaporte_combo" 
    },
    { 
        categoria: { es: "CONSULADO Y VIAJE", en: "TRAVEL & CONSULATE" }, 
        id: "visitas_anteriores", 
        pregunta: { es: "¿HA ESTADO ALGUNA VEZ EN EL PAÍS DESTINO? (FECHAS):", en: "HAVE YOU EVER BEEN TO THE DESTINATION COUNTRY? (DATES):" }, 
        tip: { es: "Revisa los sellos de tu pasaporte anterior.", en: "Check entry stamps on your previous passports." }, 
        tipo: "sino_texto" 
    },
    { 
        categoria: { es: "CONSULADO Y VIAJE", en: "TRAVEL & CONSULATE" }, 
        id: "licencia_eu", 
        pregunta: { es: "¿TIENE LICENCIA DE CONDUCIR O ID DEL PAÍS DESTINO?:", en: "DO YOU HAVE A DRIVER'S LICENSE OR ID FROM DESTINATION COUNTRY?:" }, 
        tip: { es: "Si tienes, anota el número.", en: "If yes, write down the ID/license number." }, 
        tipo: "sino_texto" 
    },
    { 
        categoria: { es: "CONSULADO Y VIAJE", en: "TRAVEL & CONSULATE" }, 
        id: "visas_historial_combo", 
        pregunta: { es: "HISTORIAL DE VISAS E INCONVENIENTES EN EL DESTINO:", en: "VISA HISTORY & PREVIOUS ISSUES AT DESTINATION:" }, 
        tip: { es: "⚠️ IMPORTANTE: Información exacta sobre visas otorgadas o inconvenientes previos.", en: "⚠️ IMPORTANT: Exact details about previously issued visas or past entry issues/refusals." }, 
        tipo: "visas_historial_combo" 
    },
    { 
        categoria: { es: "CONSULADO Y VIAJE", en: "TRAVEL & CONSULATE" }, 
        id: "seguridad", 
        pregunta: { es: "¿TIENE EXPERIENCIA EN ARMAS DE FUEGO O HA SERVIDO AL EJÉRCITO?:", en: "DO YOU HAVE FIREARMS EXPERIENCE OR MILITARY SERVICE?:" }, 
        tip: { es: "Si respondes Sí, detalla tu experiencia.", en: "If yes, provide details." }, 
        tipo: "sino_texto" 
    }
];

const PREGUNTAS_A_OMITIR_PRIMERA_VEZ = ['ssn_tax_id', 'visitas_anteriores', 'licencia_eu', 'visas_historial_combo'];
const PREGUNTAS_A_OMITIR_SOLTERO = ['esposo_combo'];

const PASOS_PRE_CUESTIONARIO = 5; 
const PASOS_POST_CUESTIONARIO = 8; 
const TOTAL_PASOS = PASOS_PRE_CUESTIONARIO + cuestionarioBase.length + PASOS_POST_CUESTIONARIO; 

let appData = JSON.parse(localStorage.getItem('datosVisado')) || {
    idioma: "es", // Idioma por defecto
    paso_actual: 0, 
    pais_destino: "Estados Unidos 🇺🇸",
    motivo_viaje: "",
    folio_pasaporte: "", 
    ds160_index: 0, 
    respuestas_ds160: {}, 
    cita_cas: null, 
    cita_entrevista: null
};

// Helper de traducciones
function t(key, replacements = {}) {
    let lang = appData.idioma || "es";
    let text = (i18n[lang] && i18n[lang][key]) ? i18n[lang][key] : (i18n['es'][key] || key);
    for (const [k, v] of Object.entries(replacements)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return text;
}

function cambiarIdioma(nuevoIdioma) {
    appData.idioma = nuevoIdioma;
    localStorage.setItem('datosVisado', JSON.stringify(appData));
    if (typeof setLanguage === 'function') {
        setLanguage(nuevoIdioma);
    }
    renderScreen();
}

function obtenerNombrePaisLimpio(pais) {
    if (!pais) return "";
    return pais.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
}

function formatearTextoPregunta(textoOriginalObj, paisActual) {
    let lang = appData.idioma || "es";
    let textoOriginal = typeof textoOriginalObj === 'object' ? (textoOriginalObj[lang] || textoOriginalObj['es']) : textoOriginalObj;
    let paisLimpio = obtenerNombrePaisLimpio(paisActual);

    if (lang === 'en') {
        return textoOriginal
            .replace("DESTINATION COUNTRY", paisLimpio.toUpperCase())
            .replace("THE DESTINATION COUNTRY", paisLimpio.toUpperCase())
            .replace("DESTINATION", paisLimpio);
    }

    return textoOriginal
        .replace("DEL PAÍS DESTINO", `DE ${paisLimpio.toUpperCase()}`)
        .replace("EN EL PAÍS DESTINO", `EN ${paisLimpio.toUpperCase()}`)
        .replace("EN PAÍS DESTINO", `EN ${paisLimpio.toUpperCase()}`)
        .replace("PAÍS DESTINO", paisLimpio);
}

function mostrarAlerta(mensaje) {
    let modal = document.getElementById('customModal');
    let acciones = document.getElementById('modalActions');
    let msgElem = document.getElementById('modalMessage');
    if (msgElem) msgElem.innerText = mensaje;
    if (acciones) {
        acciones.innerHTML = `<button onclick="cerrarModal()">${t('btn_accept')}</button>`;
    }
    if (modal) modal.style.display = 'flex';
}

function mostrarConfirmacion(mensaje, funcionAceptar) {
    let modal = document.getElementById('customModal');
    let acciones = document.getElementById('modalActions');
    let msgElem = document.getElementById('modalMessage');
    if (msgElem) msgElem.innerText = mensaje;
    if (acciones) {
        acciones.innerHTML = `
            <button onclick="${funcionAceptar}(); cerrarModal();" style="background: var(--color-acento, #e53935); color: white; margin-bottom: 8px;">${t('btn_confirm_delete')}</button>
            <button onclick="cerrarModal()" class="secondary">${t('btn_cancel')}</button>
        `;
    }
    if (modal) modal.style.display = 'flex';
}

function cerrarModal() {
    let modal = document.getElementById('customModal');
    if (modal) modal.style.display = 'none';
}

function debeOmitirse(idx) {
    if(idx < 0 || idx >= cuestionarioBase.length) return false;
    let q = cuestionarioBase[idx];
    let primerVisa = appData.respuestas_ds160['historial_previo_eu'];
    if ((primerVisa === 'No, nunca he ido y es mi primera visa' || primerVisa === 'No, I have never been and this is my first visa') && PREGUNTAS_A_OMITIR_PRIMERA_VEZ.includes(q.id)) return true;
    
    let estadoCivil = appData.respuestas_ds160['estado_civil'];
    if ((['Soltero(a)', 'Divorciado(a)', 'Unión Libre', 'Single', 'Divorced', 'Common Law / Domestic Partnership'].includes(estadoCivil)) && PREGUNTAS_A_OMITIR_SOLTERO.includes(q.id)) return true;
    
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
    let input = document.getElementById(id);
    let val = input ? input.value.trim() : "";
    if(!val) { 
        mostrarAlerta(t('msg_enter_required')); 
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
    let cpInput = document.getElementById('cp_input');
    if (!cpInput) return;
    let cp = cpInput.value;
    if(cp.length < 4) return;
    let msg = document.getElementById('msg_estado');
    let sel = document.getElementById('colonia_select');
    
    msg.innerText = t('msg_cp_searching'); 
    document.getElementById('direccion_detalles').style.display = 'block';
    
    try {
        let res = await fetch(`https://api.zippopotam.us/mx/${cp}`);
        if(!res.ok) throw new Error();
        let data = await res.json();
        
        sel.innerHTML = ''; 
        data.places.forEach(p => {
            sel.innerHTML += `<option value="${p['place name']}, ${data.places[0].state}">${p['place name']}</option>`;
        });
        
        msg.innerText = t('msg_cp_found', {state: data.places[0].state}); 
        msg.style.color = "green";
    } catch(e) { 
        msg.innerText = t('msg_cp_not_found'); 
        msg.style.color = "red"; 
        sel.innerHTML = `<option value="">${appData.idioma === 'en' ? 'Manual' : 'Manual'}</option>`; 
    }
}

function renderScreen(pasoForzado = null) {
    let step = pasoForzado !== null ? pasoForzado : appData.paso_actual;
    let html = "";
    let lang = appData.idioma || "es";
    
    let progresoReal = step < 5 ? step : (step === 5 ? 5 + appData.ds160_index : 5 + cuestionarioBase.length + (step - 5));
    let progressBar = document.getElementById('progressBar');
    if (progressBar) progressBar.style.width = ((progresoReal / TOTAL_PASOS) * 100) + "%";

    let paisActual = appData.pais_destino || "el país destino";
    let paisLimpio = obtenerNombrePaisLimpio(paisActual);

    switch(step) {
        case 0: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">✈️</div>
                <h2 style="color: var(--color-primario); margin-top:0; text-align: center;">${t('welcome_title')}</h2>
                
                <div class="tip-box" style="margin-bottom: 15px;">
                    <label style="font-weight: bold; display: block; margin-bottom: 8px;">${t('select_lang')}</label>
                    <div style="display: flex; gap: 10px;">
                        <button type="button" class="${lang === 'es' ? 'success' : 'secondary'}" onclick="cambiarIdioma('es')">Español 🇲🇽</button>
                        <button type="button" class="${lang === 'en' ? 'success' : 'secondary'}" onclick="cambiarIdioma('en')">English 🇺🇸</button>
                    </div>
                </div>

                <div style="background: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin-bottom: 15px; border-radius: 4px; font-size: 13px; color: #b71c1c; text-align: left;">
                    <p style="margin: 0 0 5px 0;"><b>${t('disclaimer_gov_title')}</b></p>
                    <p style="margin: 0;">${t('disclaimer_gov_desc')}</p>
                </div>

                <div class="tip-box">
                    <p style="margin: 0 0 8px 0;"><b>${t('welcome_desc_title')}</b></p>
                    <p style="margin: 0;">${t('welcome_desc')}</p>
                </div>

                <div class="form-grid-2">
                    <div class="full-width">
                        <label style="font-weight: bold; display: block; margin-bottom: 8px;">${t('select_country')}</label>
                        <select id="selectPaisDestino">
                            <option value="Estados Unidos 🇺🇸" ${appData.pais_destino === "Estados Unidos 🇺🇸" ? "selected":""}>Estados Unidos 🇺🇸</option>
                            <option value="Canadá 🇨🇦" ${appData.pais_destino === "Canadá 🇨🇦" ? "selected":""}>Canadá 🇨🇦</option>
                            <option value="Europa / Espacio Schengen 🇪🇺" ${appData.pais_destino === "Europa / Espacio Schengen 🇪🇺" ? "selected":""}>Europa / Espacio Schengen 🇪🇺</option>
                            <option value="Japón 🇯🇵" ${appData.pais_destino === "Japón 🇯🇵" ? "selected":""}>Japón 🇯🇵</option>
                            <option value="Australia 🇦🇺" ${appData.pais_destino === "Australia 🇦🇺" ? "selected":""}>Australia 🇦🇺</option>
                        </select>
                    </div>
                    <div class="full-width">
                        <label style="font-weight: bold; display: block; margin-bottom: 8px;">${t('select_purpose')}</label>
                        <select id="selectMotivoViaje">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_tourism')}" ${appData.motivo_viaje === t('opt_tourism') ? "selected":""}>${t('opt_tourism')}</option>
                            <option value="${t('opt_business')}" ${appData.motivo_viaje === t('opt_business') ? "selected":""}>${t('opt_business')}</option>
                            <option value="${t('opt_study')}" ${appData.motivo_viaje === t('opt_study') ? "selected":""}>${t('opt_study')}</option>
                            <option value="${t('opt_work')}" ${appData.motivo_viaje === t('opt_work') ? "selected":""}>${t('opt_work')}</option>
                            <option value="${t('opt_other')}" ${appData.motivo_viaje === t('opt_other') ? "selected":""}>${t('opt_other')}</option>
                        </select>
                    </div>
                    <div class="button-group-desktop full-width">
                        <button onclick="guardarPaisInicial()">${t('btn_start')}</button>
                    </div>
                </div>
            `; 
            break;

        case 1: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📘</div>
                <h3 style="text-align: center;">${t('step1_title')}</h3>
                <p style="text-align: center; margin-bottom: 20px;">${t('step1_desc', {pais: paisActual})}</p>
                <div class="button-group-desktop">
                    <button onclick="avanzarPaso(2)">${t('btn_yes_passport')}</button>
                    <button onclick="avanzarPaso(3)" class="secondary">${t('btn_no_passport')}</button>
                </div>
            `; 
            break;

        case 2: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">✍️</div>
                <h3 style="text-align: center;">${t('step2_title')}</h3>
                <p style="text-align: center;">${t('step2_desc')}</p>
                <input type="text" id="inputFolio" value="${appData.folio_pasaporte || ''}" placeholder="Ej. G-00001" style="text-align: center; max-width: 400px; margin: 15px auto; display: block;">
                <div class="button-group-desktop">
                    <button onclick="guardarInputGeneral('folio_pasaporte', 'inputFolio', 4)">${t('btn_save_folio')}</button>
                </div>
            `; 
            break;

        case 3: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">⏳</div>
                <h3 style="text-align: center;">${t('step3_title')}</h3>
                <p style="text-align: center;">${t('step3_desc')}</p>
                <div class="agency-box">${t('step3_tip').replace('\n', '<br>')}</div>
                <div class="button-group-desktop">
                    <button onclick="avanzarPaso(2)">${t('step3_btn')}</button>
                </div>
            `; 
            break;

        case 4: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🏆</div>
                <h3 style="text-align: center;">${t('step4_title')}</h3>
                <p style="text-align: center;">${t('step4_desc', {pais: paisActual})}</p>
                <div class="button-group-desktop" style="margin-top:20px;">
                    <button onclick="avanzarPaso(5)">${t('step4_btn')}</button>
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
            let catTexto = typeof q.categoria === 'object' ? (q.categoria[lang] || q.categoria['es']) : q.categoria;
            let tipTexto = typeof q.tip === 'object' ? (q.tip[lang] || q.tip['es']) : q.tip;

            html = `
                <p style="text-transform: uppercase; font-size: 13px; color: #666; margin-bottom:0; font-weight:bold;">${t('q_label_step', {current: idx + 1, total: cuestionarioBase.length})}</p>
                <p style="color: var(--color-acento); font-weight:bold; margin-top:5px; font-size:12px;">${t('q_label_sec', {categoria: catTexto, pais: paisLimpio})}</p>
                <h3 style="text-align: left; margin: 10px 0 15px 0;">${preguntaTexto}</h3>
                
                <div class="form-grid-2">
            `;

            if (q.tipo === "direccion_mx") {
                html += `
                    <div class="full-width">
                        <label>1. ${lang === 'en' ? 'ZIP / Postal Code:' : 'Código Postal:'}</label>
                        <div style="display:flex; gap:10px;">
                            <input type="number" id="cp_input" placeholder="Ej. 80000" onkeyup="if(this.value.length === 5) buscarCP()">
                            <button type="button" onclick="buscarCP()" style="width: auto; margin-top: 6px;">${t('btn_search_cp')}</button>
                        </div>
                        <div id="direccion_detalles" style="display:none; border-top: 1px solid #ccc; padding-top: 15px;">
                            <p id="msg_estado" style="font-size: 14px; font-weight: bold; margin: 0 0 10px 0;"></p>
                            <label>2. ${lang === 'en' ? 'Neighborhood / Suburb:' : 'Colonia:'}</label><select id="colonia_select"></select>
                            <label style="margin-top: 10px; display:block;">3. ${lang === 'en' ? 'Street and Number:' : 'Calle y Número:'}</label><input type="text" id="calle_input" placeholder="Ej. Calle 123">
                        </div>
                        ${respuestaPrevia ? `<p style="font-size:13px; color:var(--color-primario);"><b>${lang === 'en' ? 'Saved:' : 'Guardado:'}</b>${respuestaPrevia}</p>` : ''}
                    </div>`;
            }
            else if (q.tipo === "nombre_nacimiento_combo") {
                let d = {nombreCompleto: "", fechaNacimiento: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Full Name(s) and Last Names:' : 'Nombre(s) y Apellidos Completos:'}</label>
                        <input type="text" id="per_nombre" value="${d.nombreCompleto}" placeholder="${lang === 'en' ? 'Exactly as in passport' : 'Exacto a tu pasaporte'}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Date of Birth:' : 'Fecha de Nacimiento:'}</label>
                        <input type="date" id="per_fecha" value="${d.fechaNacimiento}">
                    </div>
                `;
            }
            else if (q.tipo === "lugar_nacionalidad_combo") {
                let d = {municipio: "", nac_sino: "", nac_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'City/Municipality of Birth:' : 'Municipio de Nacimiento:'}</label>
                        <input type="text" id="lug_municipio" value="${d.municipio || ''}" placeholder="Ej. Culiacán">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Do you hold another nationality?:' : '¿Tiene otra nacionalidad?:'}</label>
                        <select id="lug_nac_sino" onchange="document.getElementById('div_lug_nac').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.nac_sino === 'Sí' || d.nac_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.nac_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div id="div_lug_nac" class="full-width" style="display: ${(d.nac_sino === 'Sí' || d.nac_sino === 'Yes') ? 'block' : 'none'};">
                        <label style="font-size:13px; color: var(--color-primario);">${lang === 'en' ? 'Specify which one(s):' : 'Especifica cuál o cuáles:'}</label>
                        <input type="text" id="lug_nac_det" value="${d.nac_det || ''}" placeholder="Ej. Española">
                    </div>
                `;
            }
            else if (q.tipo === "contacto_redes_combo") {
                let d = {telefonos: "", redes: "", prev_sino: "", prev_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Current Phone Numbers:' : 'Teléfonos Actuales:'}</label>
                        <input type="text" id="cnt_telefonos" value="${d.telefonos || ''}" placeholder="${lang === 'en' ? 'Mobile / Home' : 'Celular / Casa'}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Other phones/emails in 5 years?:' : '¿Otros teléfonos/emails en 5 años?:'}</label>
                        <select id="cnt_prev_sino" onchange="document.getElementById('div_cnt_prev').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.prev_sino === 'Sí' || d.prev_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.prev_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. ${lang === 'en' ? 'Social Media (Facebook, Instagram, etc.):' : 'Redes Sociales (Facebook, Instagram, etc.):'}</label>
                        <textarea id="cnt_redes" placeholder="${lang === 'en' ? 'Usernames or exact links...' : 'Usuarios o enlaces exactos...'}">${d.redes || ''}</textarea>
                    </div>
                    <div id="div_cnt_prev" class="full-width" style="display: ${(d.prev_sino === 'Sí' || d.prev_sino === 'Yes') ? 'block' : 'none'};">
                        <label style="font-size:13px; color: var(--color-primario);">${lang === 'en' ? 'Detail previous phones/emails:' : 'Detalla números o correos anteriores:'}</label>
                        <textarea id="cnt_prev_det" placeholder="...">${d.prev_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "esposo_combo") {
                let d = {nombre: "", fecha: "", lugar: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Full Name:' : 'Nombre Completo:'}</label>
                        <input type="text" id="esp_nombre" value="${d.nombre || ''}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Date of Birth:' : 'Fecha de Nacimiento:'}</label>
                        <input type="date" id="esp_fecha" value="${d.fecha || ''}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">3. ${lang === 'en' ? 'Place of Birth:' : 'Lugar de Nacimiento:'}</label>
                        <input type="text" id="esp_lugar" value="${d.lugar || ''}">
                    </div>
                `;
            }
            else if (q.tipo === "padres_combo") {
                let d = {nombres: "", ocupacion: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Names and Dates of Birth of Father and Mother:' : 'Nombres y Fechas de Nacimiento de Padre y Madre:'}</label>
                        <textarea id="pad_nombres" placeholder="Ej. Juan Pérez (01/Ene/1960)...">${d.nombres}</textarea>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? "Parents' Occupations:" : '¿A qué se dedican sus padres?:'}</label>
                        <textarea id="pad_ocupacion" placeholder="...">${d.ocupacion}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "educacion_combo") {
                let datosEdu = {nivel: "", especialidad: "", escuelas: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { datosEdu = JSON.parse(respuestaPrevia); } catch(e){} }
                let niveles = lang === 'en' 
                    ? ["Primary School", "Secondary School", "High School", "Technical / Vocational", "Bachelor's / Engineering", "Master's", "Doctorate", "None"]
                    : ["Primaria", "Secundaria", "Preparatoria / Bachillerato", "Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado", "Ninguno"];
                let requiereEspecialidad = ["Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado", "Technical / Vocational", "Bachelor's / Engineering", "Master's", "Doctorate"].includes(datosEdu.nivel);
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Education Level:' : 'Nivel de Estudios:'}</label>
                        <select id="edu_nivel" onchange="
                            let req = ['Carrera Técnica', 'Licenciatura / Ingeniería', 'Maestría', 'Doctorado', 'Technical / Vocational', 'Bachelor\\'s / Engineering', 'Master\\'s', 'Doctorate'].includes(this.value);
                            document.getElementById('div_especialidad').style.display = req ? 'block' : 'none';
                        ">
                            <option value="">${t('select_default')}</option>
                            ${niveles.map(o => `<option value="${o}" ${datosEdu.nivel === o ? 'selected':''}>${o}</option>`).join('')}
                        </select>
                    </div>
                    <div id="div_especialidad" style="display: ${requiereEspecialidad ? 'block' : 'none'};">
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Major / Specialty:' : 'Especialidad / Carrera:'}</label>
                        <input type="text" id="edu_especialidad" value="${datosEdu.especialidad && !['No aplica', 'N/A'].includes(datosEdu.especialidad) ? datosEdu.especialidad : ''}">
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. ${lang === 'en' ? 'Institutions attended:' : 'Instituciones asistidas:'}</label>
                        <textarea id="edu_escuelas" placeholder="${lang === 'en' ? 'School, address, and dates...' : 'Escuela, domicilio y fechas...'}">${datosEdu.escuelas}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "empresa_combo") {
                let d = {nombre: "", direccion: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Company or Institution Name:' : 'Nombre de la Empresa o Institución:'}</label>
                        <input type="text" id="emp_nombre" value="${d.nombre}">
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Full Address and Phone:' : 'Dirección Completa y Teléfono:'}</label>
                        <textarea id="emp_direccion">${d.direccion}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "puesto_combo") {
                let d = {puesto: "", antiguedad: "", funciones: "", sueldo: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Job Title / Occupation:' : 'Puesto u Ocupación Principal:'}</label>
                        <input type="text" id="pst_nombre" value="${d.puesto}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Years Employed:' : 'Antigüedad (años):'}</label>
                        <input type="number" id="pst_antiguedad" value="${d.antiguedad}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">3. ${lang === 'en' ? 'Gross Monthly Income:' : 'Sueldo Mensual Bruto:'}</label>
                        <input type="text" id="pst_sueldo" value="${d.sueldo}">
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">4. ${lang === 'en' ? 'Job Duties Description:' : 'Descripción de Funciones:'}</label>
                        <textarea id="pst_funciones">${d.funciones}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "plan_viaje_combo") {
                let d = {motivo: "", fecha: "", tiempo: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Primary Purpose of Trip:' : 'Motivo Principal de Viaje:'}</label>
                        <textarea id="pln_motivo">${d.motivo}</textarea>
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Estimated Arrival Date:' : 'Fecha Aproximada:'}</label>
                        <input type="date" id="pln_fecha" value="${d.fecha}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">3. ${lang === 'en' ? 'Duration of Stay (days/weeks):' : 'Permanencia (días/semanas):'}</label>
                        <input type="text" id="pln_tiempo" value="${d.tiempo}">
                    </div>
                `;
            }
            else if (q.tipo === "logistica_combo") {
                let d = {hospedaje: "", quienPaga: "", acompanantes_sino: "", acompanantes_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Person/Entity Paying for Trip:' : 'Quién Cubre Gastos:'}</label>
                        <input type="text" id="log_quienPaga" value="${d.quienPaga}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Traveling with others?:' : '¿Viaja Acompañado?:'}</label>
                        <select id="log_acompanantes_sino" onchange="document.getElementById('div_log_acompanantes').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.acompanantes_sino === 'Sí' || d.acompanantes_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.acompanantes_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. ${lang === 'en' ? 'Destination Accommodation:' : 'Hospedaje en Destino:'}</label>
                        <textarea id="log_hospedaje">${d.hospedaje}</textarea>
                    </div>
                    <div id="div_log_acompanantes" class="full-width" style="display: ${(d.acompanantes_sino === 'Sí' || d.acompanantes_sino === 'Yes') ? 'block' : 'none'};">
                        <label style="font-size:13px; color: var(--color-primario);">${lang === 'en' ? 'Names and relationship of companions:' : 'Nombres y parentesco de acompañantes:'}</label>
                        <textarea id="log_acompanantes_det">${d.acompanantes_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "contactos_combo") {
                let d = {cercanos_sino: "", cercanos_det: "", otros_sino: "", otros_det: "", viajes_sino: "", viajes_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? `Immediate Relatives in ${paisLimpio}?:` : `¿Familiares Cercanos en ${paisLimpio}?:`}</label>
                        <select id="cnt_cercanos_sino" onchange="document.getElementById('div_cnt_cercanos').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.cercanos_sino === 'Sí' || d.cercanos_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.cercanos_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? `Other Relatives in ${paisLimpio}?:` : `¿Otros Familiares en ${paisLimpio}?:`}</label>
                        <select id="cnt_otros_sino" onchange="document.getElementById('div_cnt_otros').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.otros_sino === 'Sí' || d.otros_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.otros_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div id="div_cnt_cercanos" class="full-width" style="display: ${(d.cercanos_sino === 'Sí' || d.cercanos_sino === 'Yes') ? 'block' : 'none'};">
                        <textarea id="cnt_cercanos_det" placeholder="${lang === 'en' ? 'Details of immediate relatives...' : 'Detalles de familiares cercanos...'}">${d.cercanos_det || ''}</textarea>
                    </div>
                    <div id="div_cnt_otros" class="full-width" style="display: ${(d.otros_sino === 'Sí' || d.otros_sino === 'Yes') ? 'block' : 'none'};">
                        <textarea id="cnt_otros_det" placeholder="${lang === 'en' ? 'Details of other relatives...' : 'Detalles de otros familiares...'}">${d.otros_det || ''}</textarea>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. ${lang === 'en' ? 'Travel to other countries in last 5 years?:' : '¿Viajes a otros países en 5 años?:'}</label>
                        <select id="cnt_viajes_sino" onchange="document.getElementById('div_cnt_viajes').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.viajes_sino === 'Sí' || d.viajes_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.viajes_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div id="div_cnt_viajes" class="full-width" style="display: ${(d.viajes_sino === 'Sí' || d.viajes_sino === 'Yes') ? 'block' : 'none'};">
                        <textarea id="cnt_viajes_det" placeholder="${lang === 'en' ? 'Countries and dates...' : 'Países y fechas...'}">${d.viajes_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "pasaporte_combo") {
                let d = {lugarEmision: "", robo_sino: "", robo_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Place of Issuance:' : 'Lugar de Emisión:'}</label>
                        <input type="text" id="psp_emision" value="${d.lugarEmision || ''}">
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Passport lost/stolen?:' : '¿Pasaporte extraviado/robado?:'}</label>
                        <select id="psp_robo_sino" onchange="document.getElementById('div_psp_robo').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.robo_sino === 'Sí' || d.robo_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.robo_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div id="div_psp_robo" class="full-width" style="display: ${(d.robo_sino === 'Sí' || d.robo_sino === 'Yes') ? 'block' : 'none'};">
                        <textarea id="psp_robo_det" placeholder="${lang === 'en' ? 'Loss/theft details...' : 'Detalles de robo o extravío...'}">${d.robo_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "visas_historial_combo") {
                let d = {otorgada_sino: "", otorgada_det: "", perdidarobada_sino: "", perdidarobada_det: "", problemas_sino: "", problemas_det: ""};
                if(respuestaPrevia && respuestaPrevia.startsWith("{")) { try { d = JSON.parse(respuestaPrevia); } catch(e){} }
                html += `
                    <div>
                        <label style="font-size:14px; font-weight:bold;">1. ${lang === 'en' ? 'Previously issued visa?:' : '¿Visa otorgada previamente?:'}</label>
                        <select id="vis_otorgada_sino" onchange="document.getElementById('div_vis_otorgada').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.otorgada_sino === 'Sí' || d.otorgada_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.otorgada_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size:14px; font-weight:bold;">2. ${lang === 'en' ? 'Visa stolen/canceled?:' : '¿Visa robada/revocada?:'}</label>
                        <select id="vis_perdidarobada_sino" onchange="document.getElementById('div_vis_perdidarobada').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.perdidarobada_sino === 'Sí' || d.perdidarobada_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.perdidarobada_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div id="div_vis_otorgada" class="full-width" style="display: ${(d.otorgada_sino === 'Sí' || d.otorgada_sino === 'Yes') ? 'block' : 'none'};">
                        <textarea id="vis_otorgada_det" placeholder="${lang === 'en' ? 'Issued visa details...' : 'Detalles de la visa otorgada...'}">${d.otorgada_det || ''}</textarea>
                    </div>
                    <div id="div_vis_perdidarobada" class="full-width" style="display: ${(d.perdidarobada_sino === 'Sí' || d.perdidarobada_sino === 'Yes') ? 'block' : 'none'};">
                        <textarea id="vis_perdidarobada_det" placeholder="${lang === 'en' ? 'Circumstances and year...' : 'Circunstancias y año...'}">${d.perdidarobada_det || ''}</textarea>
                    </div>
                    <div class="full-width">
                        <label style="font-size:14px; font-weight:bold;">3. ${lang === 'en' ? 'Refused entry or visa issues?:' : '¿Inconveniente de entrada o trámite?:'}</label>
                        <select id="vis_problemas_sino" onchange="document.getElementById('div_vis_problemas').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${d.problemas_sino === 'Sí' || d.problemas_sino === 'Yes' ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${d.problemas_sino === 'No' ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div id="div_vis_problemas" class="full-width" style="display: ${(d.problemas_sino === 'Sí' || d.problemas_sino === 'Yes') ? 'block' : 'none'};">
                        <textarea id="vis_problemas_det" placeholder="${lang === 'en' ? 'Explain situation...' : 'Explique la situación...'}">${d.problemas_det || ''}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "sino_texto") {
                let isSi = respuestaPrevia.startsWith("Sí") || respuestaPrevia.startsWith("Yes");
                let detalle = isSi ? respuestaPrevia.replace(/^(Sí|Yes):?\s*/i, "") : "";
                let isNo = respuestaPrevia === "No";
                html += `
                    <div class="full-width">
                        <select id="respuestaDS160_sino" onchange="document.getElementById('div_detalle').style.display = (this.value === 'Sí' || this.value === 'Yes') ? 'block' : 'none'">
                            <option value="">${t('select_default')}</option>
                            <option value="${t('opt_yes')}" ${isSi ? 'selected' : ''}>${t('opt_yes')}</option>
                            <option value="${t('opt_no')}" ${isNo ? 'selected' : ''}>${t('opt_no')}</option>
                        </select>
                    </div>
                    <div id="div_detalle" class="full-width" style="display: ${isSi ? 'block' : 'none'};">
                        <textarea id="respuestaDS160_detalle" placeholder="${lang === 'en' ? 'Required details...' : 'Detalles requeridos...'}">${detalle}</textarea>
                    </div>
                `;
            }
            else if (q.tipo === "select") {
                let opts = typeof q.opciones === 'object' ? (q.opciones[lang] || q.opciones['es']) : q.opciones;
                html += `<div class="full-width"><select id="respuestaDS160"><option value="">${t('select_default')}</option>${opts.map(opt => `<option value="${opt}" ${respuestaPrevia === opt ? 'selected' : ''}>${opt}</option>`).join('')}</select></div>`;
            } else if (q.tipo === "textarea") {
                html += `<div class="full-width"><textarea id="respuestaDS160">${respuestaPrevia}</textarea></div>`;
            } else {
                html += `<div class="full-width"><input type="${q.tipo}" id="respuestaDS160" value="${respuestaPrevia}"></div>`;
            }

            html += `
                    <div class="tip-box full-width"><strong>${t('tip_label')}</strong><br>${tipTexto}</div>
                    <div class="button-group-desktop">
                        <button onclick="guardarRespuestaCuestionario('${q.id}', '${q.tipo}')">${t('btn_save_next')}</button>
                        ${idx > 0 ? `<button onclick="retrocederPreguntaDS()" class="secondary">${t('btn_back')}</button>` : ''}
                    </div>
                </div>
            `;
            break;

        case 6: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📝</div>
                <h3 style="text-align: center;">${t('step6_title')}</h3>
                <p style="text-align: center; margin-bottom: 20px;">${t('step6_desc', {pais: paisActual})}</p>
                <div class="button-group-desktop">
                    <button class="success" onclick="avanzarPaso(7)">${t('step6_btn')}</button>
                </div>
            `; 
            break;

        case 7: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📸</div>
                <h3 style="text-align: center;">${t('step7_title')}</h3>
                <div class="button-group-desktop" style="margin-top: 20px;">
                    <button onclick="avanzarPaso(8)">${t('btn_yes_agenda')}</button>
                    <button onclick="avanzarPaso(9)" class="secondary">${t('btn_no_agenda')}</button>
                </div>
            `; 
            break;

        case 8: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📅</div>
                <h3 style="text-align: center;">${t('step8_title')}</h3>
                <div class="tip-box">${t('step8_tip')}</div>
                <div class="form-grid-2">
                    <div><label>${t('lbl_date')}</label><input type="date" id="cita_fecha" value="${appData.cita_cas?.fecha || ''}"></div>
                    <div><label>${t('lbl_time')}</label><input type="time" id="cita_hora" value="${appData.cita_cas?.hora || ''}"></div>
                    <div class="full-width"><label>${t('lbl_place')}</label><input type="text" id="cita_lugar" value="${appData.cita_cas?.lugar || ''}"></div>
                    <div class="button-group-desktop">
                        <button onclick="guardarCita('cas', 10)">${t('btn_save_appointment')}</button>
                    </div>
                </div>
            `; 
            break;

        case 9: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🤝</div>
                <div class="agency-box">${t('step9_agency').replace('\n', '<br>')}</div>
                <div class="button-group-desktop">
                    <button onclick="avanzarPaso(8)">${t('btn_yes_agenda')}</button>
                    <button onclick="avanzarPaso(10)" class="secondary">${t('step9_btn_no')}</button>
                </div>
            `; 
            break;

        case 10: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🏛️</div>
                <h3 style="text-align: center;">${t('step10_title')}</h3>
                <div class="button-group-desktop" style="margin-top:20px;">
                    <button onclick="avanzarPaso(11)">${t('btn_yes_agenda')}</button>
                    <button onclick="avanzarPaso(12)" class="secondary">${t('btn_no_agenda')}</button>
                </div>
            `; 
            break;

        case 11: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">📍</div>
                <h3 style="text-align: center;">${t('step11_title')}</h3>
                <div class="warning-box">${t('step11_warning')}</div>
                <div class="form-grid-2">
                    <div><label>${t('lbl_date')}</label><input type="date" id="cita_fecha" value="${appData.cita_entrevista?.fecha || ''}"></div>
                    <div><label>${t('lbl_time')}</label><input type="time" id="cita_hora" value="${appData.cita_entrevista?.hora || ''}"></div>
                    <div class="full-width"><label>${t('lbl_embassy')}</label><input type="text" id="cita_lugar" value="${appData.cita_entrevista?.lugar || ''}"></div>
                    <div class="button-group-desktop">
                        <button onclick="guardarCita('entrevista', 13)">${t('btn_save_appointment')}</button>
                    </div>
                </div>
            `; 
            break;

        case 12: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🔎</div>
                <div class="agency-box">${t('step12_agency').replace('\n', '<br>')}</div>
                <div class="button-group-desktop">
                    <button onclick="avanzarPaso(11)">${t('btn_yes_agenda')}</button>
                    <button onclick="avanzarPaso(13)" class="secondary">${t('step12_btn_no')}</button>
                </div>
            `; 
            break;

        case 13: 
            html = `
                <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">🎉</div>
                <h3 style="color: var(--color-primario); text-align: center;">${t('step13_title')}</h3>
                <p style="text-align: center;">${t('step13_desc', {pais: paisActual})}</p>
                
                <div class="interview-tips">
                    <h4 style="margin-top:0; color:#01579b;">${t('tips_interview_title')}</h4>
                    <p>${t('tip_interview_1')}</p>
                    <p>${t('tip_interview_2')}</p>
                </div>

                <div class="button-group-desktop">
                    <button class="success" onclick="mostrarResumen()">${t('btn_view_exp')}</button>
                    <button class="secondary" onclick="regresarAUltimaPregunta()">${t('btn_edit_last')}</button>
                </div>
            `; 
            break;
    }

    if (pasoForzado === null && appData.paso_actual > 0) {
        html = `
            <div style="font-size: 48px; text-align: center; margin-bottom: 10px;">👋</div>
            <h3 style="text-align: center;">${t('welcome_back_title')}</h3>
            <p style="text-align: center;">${t('welcome_back_desc', {pais: paisActual})}</p>
            <div class="button-group-desktop" style="margin-top:20px;">
                <button class="success" onclick="renderScreen(${appData.paso_actual})">${t('btn_continue')}</button>
            </div>
            <div style="text-align: center; margin-top: 15px;">
                <button onclick="confirmarBorrado()" style="background:none; color:red; border:none; text-decoration:underline; cursor:pointer; width:auto;">${t('btn_reset_all')}</button>
            </div>
        `;
    }
    
    let contentElem = document.getElementById('screenContent');
    if (contentElem) contentElem.innerHTML = html;
}

function guardarPaisInicial() {
    let selectPais = document.getElementById('selectPaisDestino');
    let selectMotivo = document.getElementById('selectMotivoViaje');
    
    if (selectPais) appData.pais_destino = selectPais.value;
    
    if (selectMotivo) {
        let motivo = selectMotivo.value;
        if (!motivo) { 
            mostrarAlerta(t('msg_enter_required')); 
            return; 
        }
        appData.motivo_viaje = motivo;
        
        if (!appData.respuestas_ds160['plan_viaje_combo']) {
            appData.respuestas_ds160['plan_viaje_combo'] = JSON.stringify({motivo: motivo, fecha: "", tiempo: ""});
        }
    }
    
    avanzarPaso(1);
}

function guardarRespuestaCuestionario(id, tipo) {
    let v = "";
    let lang = appData.idioma || "es";

    if(tipo === "direccion_mx") {
        let cp=document.getElementById('cp_input').value.trim(), ca=document.getElementById('calle_input').value.trim(), co=document.getElementById('colonia_select').value;
        if(!ca || !cp) { mostrarAlerta(t('msg_enter_required')); return; }
        v = `${ca}, Col. ${co}, C.P. ${cp}`;
    } 
    else if(tipo === "nombre_nacimiento_combo") {
        let nom = document.getElementById('per_nombre').value.trim();
        let fch = document.getElementById('per_fecha').value.trim();
        if(!nom || !fch) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({nombreCompleto: nom, fechaNacimiento: fch});
    }
    else if(tipo === "lugar_nacionalidad_combo") {
        let mun = document.getElementById('lug_municipio').value.trim();
        let nac_sino = document.getElementById('lug_nac_sino').value;
        let nac_det = document.getElementById('lug_nac_det').value.trim();
        if(!mun || !nac_sino) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({municipio: mun, nac_sino: nac_sino, nac_det: (nac_sino === 'Sí' || nac_sino === 'Yes') ? nac_det : 'No'});
    }
    else if(tipo === "contacto_redes_combo") {
        let tel = document.getElementById('cnt_telefonos').value.trim();
        let red = document.getElementById('cnt_redes').value.trim();
        let prev_sino = document.getElementById('cnt_prev_sino').value;
        let prev_det = document.getElementById('cnt_prev_det').value.trim();
        if(!tel || !red || !prev_sino) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({telefonos: tel, redes: red, prev_sino: prev_sino, prev_det: (prev_sino === 'Sí' || prev_sino === 'Yes') ? prev_det : 'No'});
    }
    else if(tipo === "esposo_combo") {
        let nom = document.getElementById('esp_nombre').value.trim();
        let fch = document.getElementById('esp_fecha').value.trim();
        let lug = document.getElementById('esp_lugar').value.trim();
        if(!nom || !fch || !lug) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({nombre: nom, fecha: fch, lugar: lug});
    }
    else if(tipo === "padres_combo") {
        let nom = document.getElementById('pad_nombres').value.trim();
        let ocu = document.getElementById('pad_ocupacion').value.trim();
        if(!nom || !ocu) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({nombres: nom, ocupacion: ocu});
    }
    else if(tipo === "educacion_combo") {
        let n = document.getElementById('edu_nivel').value;
        let esc = document.getElementById('edu_escuelas').value.trim();
        let requiereEspecialidad = ["Carrera Técnica", "Licenciatura / Ingeniería", "Maestría", "Doctorado", "Technical / Vocational", "Bachelor's / Engineering", "Master's", "Doctorate"].includes(n);
        let e = requiereEspecialidad ? document.getElementById('edu_especialidad').value.trim() : "No aplica";
        if(!n || !esc) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({nivel: n, especialidad: e, escuelas: esc});
    }
    else if(tipo === "empresa_combo") {
        let nom = document.getElementById('emp_nombre').value.trim();
        let dir = document.getElementById('emp_direccion').value.trim();
        if(!nom || !dir) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({nombre: nom, direccion: dir});
    }
    else if(tipo === "puesto_combo") {
        let pst = document.getElementById('pst_nombre').value.trim();
        let ant = document.getElementById('pst_antiguedad').value.trim();
        let sld = document.getElementById('pst_sueldo').value.trim();
        let fnc = document.getElementById('pst_funciones').value.trim();
        if(!pst || !ant || !sld || !fnc) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({puesto: pst, antiguedad: ant, sueldo: sld, funciones: fnc});
    }
    else if(tipo === "plan_viaje_combo") {
        let mot = document.getElementById('pln_motivo').value.trim();
        let fch = document.getElementById('pln_fecha').value.trim();
        let tmp = document.getElementById('pln_tiempo').value.trim();
        if(!mot || !fch || !tmp) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({motivo: mot, fecha: fch, tiempo: tmp});
    }
    else if(tipo === "logistica_combo") {
        let hsp = document.getElementById('log_hospedaje').value.trim();
        let pag = document.getElementById('log_quienPaga').value.trim();
        let acm_sino = document.getElementById('log_acompanantes_sino').value;
        let acm_det = document.getElementById('log_acompanantes_det').value.trim();
        if(!hsp || !pag || !acm_sino) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({hospedaje: hsp, quienPaga: pag, acompanantes_sino: acm_sino, acompanantes_det: (acm_sino === 'Sí' || acm_sino === 'Yes') ? acm_det : 'No'});
    }
    else if(tipo === "contactos_combo") {
        let crc_sino = document.getElementById('cnt_cercanos_sino').value;
        let crc_det  = document.getElementById('cnt_cercanos_det').value.trim();
        let otr_sino = document.getElementById('cnt_otros_sino').value;
        let otr_det  = document.getElementById('cnt_otros_det').value.trim();
        let vjs_sino = document.getElementById('cnt_viajes_sino').value;
        let vjs_det  = document.getElementById('cnt_viajes_det').value.trim();
        if(!crc_sino || !otr_sino || !vjs_sino) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({
            cercanos_sino: crc_sino, cercanos_det: (crc_sino === 'Sí' || crc_sino === 'Yes') ? crc_det : 'N/A',
            otros_sino: otr_sino, otros_det: (otr_sino === 'Sí' || otr_sino === 'Yes') ? otr_det : 'N/A',
            viajes_sino: vjs_sino, viajes_det: (vjs_sino === 'Sí' || vjs_sino === 'Yes') ? vjs_det : 'N/A'
        });
    }
    else if(tipo === "pasaporte_combo") {
        let emi = document.getElementById('psp_emision').value.trim();
        let rbo_sino = document.getElementById('psp_robo_sino').value;
        let rbo_det = document.getElementById('psp_robo_det').value.trim();
        if(!emi || !rbo_sino) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({lugarEmision: emi, robo_sino: rbo_sino, robo_det: (rbo_sino === 'Sí' || rbo_sino === 'Yes') ? rbo_det : 'No'});
    }
    else if(tipo === "visas_historial_combo") {
        let otg_sino = document.getElementById('vis_otorgada_sino').value;
        let otg_det  = document.getElementById('vis_otorgada_det').value.trim();
        let prv_sino = document.getElementById('vis_perdidarobada_sino').value;
        let prv_det  = document.getElementById('vis_perdidarobada_det').value.trim();
        let prb_sino = document.getElementById('vis_problemas_sino').value;
        let prb_det  = document.getElementById('vis_problemas_det').value.trim();
        if(!otg_sino || !prv_sino || !prb_sino) { mostrarAlerta(t('msg_enter_required')); return; }
        v = JSON.stringify({
            otorgada_sino: otg_sino, otorgada_det: (otg_sino === 'Sí' || otg_sino === 'Yes') ? otg_det : 'No',
            perdidarobada_sino: prv_sino, perdidarobada_det: (prv_sino === 'Sí' || prv_sino === 'Yes') ? prv_det : 'No',
            problemas_sino: prb_sino, problemas_det: (prb_sino === 'Sí' || prb_sino === 'Yes') ? prb_det : 'No'
        });
    }
    else if(tipo === "sino_texto") {
        let sino = document.getElementById('respuestaDS160_sino').value;
        if(!sino) { mostrarAlerta(t('msg_enter_required')); return; }
        let detalle = document.getElementById('respuestaDS160_detalle').value.trim();
        v = (sino === "Sí" || sino === "Yes") ? `${sino}${detalle ? ': ' + detalle : ''}` : "No";
    }
    else {
        v = document.getElementById('respuestaDS160').value.trim();
        if(!v) { mostrarAlerta(t('msg_enter_required')); return; }
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

function guardarCita(tType, p) {
    let f = document.getElementById('cita_fecha').value;
    let h = document.getElementById('cita_hora').value;
    let l = document.getElementById('cita_lugar').value.trim();
    if(!f || !l) { mostrarAlerta(t('msg_enter_required')); return; }
    tType==='cas' ? appData.cita_cas={fecha:f, hora:h, lugar:l} : appData.cita_entrevista={fecha:f, hora:h, lugar:l};
    avanzarPaso(p);
}

function confirmarBorrado() {
    mostrarConfirmacion(t('msg_confirm_delete'), "ejecutarResetApp");
}

function ejecutarResetApp() { 
    localStorage.removeItem('datosVisado'); 
    appData = { idioma: appData.idioma || "es", paso_actual:0, pais_destino:"Estados Unidos 🇺🇸", motivo_viaje:"", folio_pasaporte:"", ds160_index:0, respuestas_ds160:{}, cita_cas:null, cita_entrevista:null }; 
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
    let lang = appData.idioma || "es";
    let paisActual = appData.pais_destino || "Estados Unidos 🇺🇸";
    let paisLimpio = obtenerNombrePaisLimpio(paisActual);
    
    let txtWhats = `*===== ${t('summary_title').toUpperCase()} =====*\n`;
    txtWhats += `*${t('lbl_country').toUpperCase()}* ${paisLimpio}\n`;
    txtWhats += `*${t('lbl_passport_folio').toUpperCase()}* ${appData.folio_pasaporte}\n\n`;
    
    let htmlVista = `<div class="resumen-header"><h2 style="color:var(--color-primario); border-bottom: 2px solid var(--color-primario); padding-bottom:10px;">${t('summary_title')}</h2>`;
    htmlVista += `<p><b>${t('lbl_country')}</b> ${paisLimpio} <span onclick="editarPasoDesdeResumen(0)" style="cursor:pointer;" title="Editar">✏️</span></p>`;
    htmlVista += `<p><b>${t('lbl_passport_folio')}</b> ${appData.folio_pasaporte} <span onclick="editarPasoDesdeResumen(2)" style="cursor:pointer;" title="Editar">✏️</span></p></div>`;
    
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

        if(p) {
            let catTXT = typeof p.categoria === 'object' ? (p.categoria[lang] || p.categoria['es']) : p.categoria;
            if(catTXT !== categoriaActual) {
                categoriaActual = catTXT;
                txtWhats += `\n*--- SECCIÓN: ${categoriaActual} ---*\n`;
                htmlVista += `<h3 class="full-width" style="background:var(--color-acento); color:#fff; padding:6px; border-radius:4px; margin-top:15px;">${categoriaActual}</h3>`;
            }
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
        htmlVista += `<h3 style="color:var(--color-primario); margin-top:20px;">${t('lbl_biometrics_appt')} <span onclick="editarPasoDesdeResumen(8)" style="cursor:pointer;">✏️</span></h3>
                      <p><b>${appData.cita_cas.fecha} - ${appData.cita_cas.hora}</b><br>${appData.cita_cas.lugar}</p>`;
    }
    if(appData.cita_entrevista) {
        htmlVista += `<h3 style="color:var(--color-primario); margin-top:10px;">${t('lbl_consular_appt')} <span onclick="editarPasoDesdeResumen(11)" style="cursor:pointer;">✏️</span></h3>
                      <p><b>${appData.cita_entrevista.fecha} - ${appData.cita_entrevista.hora}</b><br>${appData.cita_entrevista.lugar}</p>`;
    }

    let textoCodificado = encodeURIComponent(txtWhats);

    let pantallaFinal = `
        <div id="areaImprimir" style="text-align:left; background:#fff; padding:20px; border:1px solid #ccc; max-height: 450px; overflow-y: auto; border-radius: 8px;">
            ${htmlVista}
        </div>
        <div class="button-group-desktop" style="margin-top:20px;">
            <button class="success" onclick="window.print()">${t('btn_print')}</button>
            <button class="whatsapp" onclick="window.open('https://api.whatsapp.com/send?text=${textoCodificado}', '_blank')">${t('btn_whatsapp')}</button>
            <button class="secondary" onclick="renderScreen(13)">${t('btn_go_back')}</button>
        </div>
        <hr style="border: 0; border-top: 1px dashed #ccc; margin: 25px 0 15px 0;">
        <button onclick="confirmarBorrado()" style="background: var(--color-acento); color: white;">${t('btn_new_request')}</button>
    `;
    
    let contentElem = document.getElementById('screenContent');
    if (contentElem) contentElem.innerHTML = pantallaFinal;
}

// Función global conectada al botón del selector del header
function setLanguage(lang) {
    appData.idioma = lang;
    localStorage.setItem('datosVisado', JSON.stringify(appData));
    renderScreen();
}

renderScreen();
