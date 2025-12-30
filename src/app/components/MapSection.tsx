
export function MapSection() {
  return (
    <section id="map" className="w-full">
      <div className="w-full h-[450px] lg:h-[550px]">
        <iframe
          title="Company Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!2d-87.6744!3d41.6005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM2JzQ2LjAiTiA4N8KwNDAnMTIuMCJX!5e0!3m2!1sen!2sus!4v000000000000000000000"
        ></iframe>
      </div>
    </section>
  );
}
