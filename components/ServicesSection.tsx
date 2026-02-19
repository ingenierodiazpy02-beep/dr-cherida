"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, Check } from "lucide-react";

const surgicalServices = [
  {
    title: "Rinoplastia Est\u00e9tica y Funcional",
    subtitle: "Donde la funci\u00f3n respira y la forma cautiva",
    description: "La nariz es el centro arquitect\u00f3nico de tu rostro. Mi enfoque combina precisi\u00f3n funcional con refinamiento est\u00e9tico.",
    image: "/fotos de servicios/rinoplastia-funcional-y-estetica-2.jpg",
    features: ["Rinoplastia ultras\u00f3nica", "Rinomodelaci\u00f3n", "Cirug\u00eda de revisi\u00f3n"],
  },
  {
    title: "Lifting Facial y Cervical",
    subtitle: "Rejuvenecimiento que restaura",
    description: "Reposiciona tejidos con delicadeza quir\u00fargica, devuelve volumen y respeta tu expresividad natural.",
    image: "/fotos de servicios/lifting-facial-y-cervical-2.webp",
    features: ["Rostro luminoso", "Armon\u00eda de cuello", "Efecto natural"],
  },
  {
    title: "Blefaroplastia",
    subtitle: "La mirada que mereces",
    description: "Devuelve frescura a tu mirada eliminando el exceso de piel y bolsas en los p\u00e1rpados.",
    image: "/fotos de servicios/blefaroplastia.jpeg",
    features: ["Elimina bolsas", "P\u00e1rpados firmes", "Mirada descansada"],
  },
  {
    title: "Liposucci\u00f3n de Cuello",
    subtitle: "El contorno que define tu perfil",
    description: "Esculpe una l\u00ednea mandibular definida eliminando la grasa localizada bajo el ment\u00f3n.",
    image: "/fotos de servicios/Lipoescultura-barbilla-y-cuello.png",
    features: ["Perfil estilizado", "M\u00ednimamente invasivo", "Mand\u00edbula marcada"],
  },
  {
    title: "Otoplastia",
    subtitle: "Confianza en tu apariencia",
    description: "Correcci\u00f3n quir\u00fargica de las orejas prominentes para lograr una proporci\u00f3n facial arm\u00f3nica.",
    image: "/fotos de servicios/otoplastia13.jpg",
    features: ["Proporci\u00f3n natural", "Ni\u00f1os y adultos", "Confianza renovada"],
  },
  {
    title: "Mentoplastia",
    subtitle: "Equilibrio que completa tu armon\u00eda",
    description: "Mejora el balance de tu perfil mediante el aumento o reducci\u00f3n del ment\u00f3n.",
    image: "/fotos de servicios/mentoplastia-7.jpg",
    features: ["Balance facial", "Perfil arm\u00f3nico", "Cambio est\u00e9tico"],
  },
  {
    title: "Lifting de Cejas",
    subtitle: "Eleva tu expresi\u00f3n",
    description: "Reposiciona las cejas para abrir la mirada y suavizar las arrugas de la frente.",
    image: "/fotos de servicios/facelift-152-right-oblique-detail 23.jpg",
    features: ["Mirada abierta", "Frente lisa", "Aspecto rejuvenecido"],
  },
  {
    title: "Lip Lift",
    subtitle: "Armon\u00eda en tu sonrisa",
    description: "Eleva el labio superior para una sonrisa m\u00e1s juvenil y voluminosa de forma permanente.",
    image: "/fotos de servicios/lip-lift (1).webp",
    features: ["Sonrisa juvenil", "Volumen natural", "Sin rellenos"],
  },
  {
    title: "Correcci\u00f3n de Cicatrices Faciales",
    subtitle: "Restaurando la piel, devolviendo la confianza",
    description: "T\u00e9cnicas especializadas para suavizar y mejorar la apariencia de cicatrices faciales previas o traum\u00e1ticas.",
    image: "/fotos de servicios/Acne-antes-y-despues-clinica-robega-tratamientos-faciales-1 xd.JPG",
    features: ["L\u00e1ser resurfacing", "Z-plastia", "Tratamiento avanzado"],
  },
  {
    title: "Frontoplastia",
    subtitle: "Remodelaci\u00f3n de frente para un rostro arm\u00f3nico",
    description: "Procedimiento para suavizar la transici\u00f3n de la frente y reducir la visibilidad de los arcos supraciliares.",
    image: "/fotos de servicios/fontroplastia2.jpeg",
    features: ["Reducci\u00f3n \u00f3sea", "Lifting frontal", "Perfil suavizado"],
  },
  {
    title: "Queiloplastia",
    subtitle: "Perfeccionando la est\u00e9tica labial",
    description: "Cirug\u00eda de labios para mejorar su forma, volumen o posici\u00f3n de manera permanente.",
    image: "/fotos de servicios/queiloplastia-ad.jpg",
    features: ["Aumento labial", "Reducci\u00f3n de labios", "Armon\u00eda labial"],
  },
  {
    title: "Platismoplastia",
    subtitle: "Definiendo la zona del cuello",
    description: "Tratamiento profundo de las bandas platisma para un cuello firme y rejuvenecido.",
    image: "/fotos de servicios/platismoplastia.webp",
    features: ["Tensi\u00f3n muscular", "Cuello de cisne", "Resultados duraderos"],
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(surgicalServices[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 lg:py-32 relative overflow-x-clip" style={{ backgroundColor: '#ddd7c9' }}>
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-4">Servicios</p>
          <h2 className="font-serif text-5xl lg:text-6xl text-foreground mb-6">Excelencia Quir&uacute;rgica</h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Combinamos precisi&oacute;n m&eacute;dica con una visi&oacute;n est&eacute;tica art&iacute;stica para revelar tu mejor versi&oacute;n.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/3 flex flex-col space-y-2">
            {surgicalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveService(service)}
                className={`relative group cursor-pointer p-6 rounded-sm transition-all duration-300 border-l-2 ${activeService.title === service.title
                  ? "bg-gold/5 border-gold shadow-sm"
                  : "border-transparent hover:bg-gold/5 hover:border-gold/30"
                  }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`font-serif text-xl transition-colors duration-300 ${activeService.title === service.title ? "text-gold" : "text-foreground/80"
                    }`}>
                    {service.title}
                  </h3>
                  <ChevronRight size={18} className={`transition-all duration-300 ${activeService.title === service.title ? "text-gold translate-x-0" : "text-muted-foreground/0 -translate-x-4"
                    }`} />
                </div>
                <p className="font-sans text-xs text-muted-foreground line-clamp-2">
                  {service.subtitle}
                </p>

                <AnimatePresence>
                  {activeService.title === service.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gold/10 lg:hidden"
                    >
                      <div className="w-full aspect-video rounded-sm overflow-hidden bg-charcoal relative mb-6">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic border-l-2 border-gold/30 pl-3">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map(f => (
                          <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check size={12} className="text-gold" /> {f}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block w-2/3 h-[calc(100vh-160px)] min-h-[500px] max-h-[750px] sticky top-28 group">
            <div className="relative w-full h-full overflow-hidden rounded-sm bg-charcoal">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${activeService.title === "Liposucci\u00f3n de Cuello" ? "object-[center_35%] brightness-[1.03] contrast-[1.02]" :
                      activeService.title === "Lifting de Cejas" ? "object-[center_15%] brightness-[1.02]" :
                        activeService.title === "Mentoplastia" ? "object-[center_60%] brightness-[1.02]" :
                          activeService.title === "Otoplastia" ? "object-[center_45%]" :
                            activeService.title === "Rinoplastia Est\u00e9tica y Funcional" ? "object-[center_25%]" :
                              "object-center"
                      }`}
                    style={{
                      imageRendering: 'auto',
                      objectFit: (activeService.title === "Platismoplastia" || activeService.title === "Frontoplastia" || activeService.title === "Queiloplastia" || activeService.title === "Lip Lift" || activeService.title === "Correcci\u00f3n de Cicatrices Faciales" || activeService.title === "Lifting de Cejas") ? "contain" : "cover"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 p-12 text-white w-full"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-px bg-gold" />
                      <span className="font-sans text-xs tracking-widest uppercase text-gold">Premium Procedure</span>
                    </div>
                    <h4 className="font-serif text-4xl mb-4 italic">{activeService.title}</h4>
                    <p className="font-sans text-lg text-white/80 max-w-xl leading-relaxed mb-8">
                      {activeService.description}
                    </p>
                    <div className="grid grid-cols-3 gap-6">
                      {activeService.features.map(f => (
                        <div key={f} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                          <span className="text-sm font-sans tracking-wide">{f}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 -z-10" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link href="/contacto" className="btn-elegant inline-flex items-center gap-2">
            {"Agendar Evaluaci\u00f3n"} <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
