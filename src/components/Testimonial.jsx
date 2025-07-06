function Testimonial(props) {
  return (
    <section className="w-[90vw] lg:w-[35vw] px-3 pb-8 text-very-dark-blue text-center bg-dark-grayish-blue/10 mx-auto relative">
      <img
        className="mx-auto w-20 absolute top-[-40px] left-1/2 -translate-x-1/2"
        src={props.av}
        alt={props.name}
      />
      <div className="pt-12">
        <p className="text-lg font-bold">{props.name}</p>
        <p className="my-5 text-dark-grayish-blue">{props.said}</p>
      </div>
    </section>
  );
}

export default Testimonial;