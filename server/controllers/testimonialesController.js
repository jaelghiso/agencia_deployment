const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales: testimoniales
    })
}

exports.crearTestimonial = async (req, res) =>{
    let { name, email, message } = req.body;

    let errores = [];
    if(!name){
        errores.push({'mensaje': 'Agrega tu nombre'})
    }
    if(!email){
        errores.push({'mensaje': 'Agrega tu email'})
    }if(!message){
        errores.push({'mensaje': 'Escribe tu testimonio'})
    }

    if(errores.length > 0){
        const testimoniales =  await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            name,
            email,
            message,
            pagina: 'Testimoniales',
            testimoniales
        })
    } else{
       const testimonial = await Testimonial.create({
            name,
            email,
            message
        }).then(testimonial => res.redirect('/testimoniales'))
          .catch(error => console.log(error));
    }
}