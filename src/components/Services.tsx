import '../css-modules/Services.module.css'
const Services = ()=>{
    return (
    <section className="services-section" id="services">
      <div className="title">
        <p className="title-sub">some of the things we offer</p>
        <h2 className="title-main">our services</h2>
      </div>
      <div className="services-container">
        
        <div className="service-card">
          <div className="service-card-img-wrapper">
            <img
              src="./src/images/service-vet.png"
              alt="veterinary services"
              className="service-image"
            />
          </div>
          <h3 className="service-title">veterinary service</h3>
          <p className="service-description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
        

        <div className="service-card">
          <div className="service-card-img-wrapper">
            <img
              src="./src/images/service-horse-grooming.png"
              alt="horse grooming"
              className="service-image"
            />
          </div>
          <h3 className="service-title">horse grooming</h3>
          <p className="service-description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
     
        <div className="service-card">
          <div className="service-card-img-wrapper">
            <img
              src="./src/images/service-horse-training.png"
              alt="horse training"
              className="service-image"
            />
          </div>
          <h3 className="service-title">horse training</h3>
          <p className="service-description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>

        <div className="service-card">
          <div className="service-card-img-wrapper">
            <img
              src="./src/images/service-horse-feeding.png"
              alt="horse feeding"
              className="service-image"
            />
          </div>
          <h3 className="service-title">horse feeding</h3>
          <p className="service-description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
       
        <div className="service-card">
          <div className="service-card-img-wrapper">
            <img
              src="./src/images/service-horse-santuary.png"
              alt="sanctuary for horses"
              className="service-image"
            />
          </div>
          <h3 className="service-title">Sanctuary for horses</h3>
          <p className="service-description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
   
        <div className="service-card">
          <div className="service-card-img-wrapper">
            <img
              src="./src/images/service-horse-tracking.png"
              alt="digital tracking"
              className="service-image"
            />
          </div>
          <h3 className="service-title">digital tracking</h3>
          <p className="service-description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove.
          </p>
        </div>
      
      </div>
    </section>
    )
}

export default Services;