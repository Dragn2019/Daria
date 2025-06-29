import './App.css'
import backgroundImage from './assets/images/90018e81c364ea80bffe586935356908.jpg'
import hotelImage1 from './assets/images/1.jpg'
import hotelImage2 from './assets/images/2.jpg'
import hotelImage3 from './assets/images/3.jpg'
import hotelImage4 from './assets/images/4.jpg'
import { useEffect, useState } from 'react'

function Gallery({ isOpen, onClose, images }: { isOpen: boolean; onClose: () => void; images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!isOpen) return null

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-close" onClick={onClose}>×</button>
        <button className="gallery-nav prev" onClick={handlePrev}>←</button>
        <img src={images[currentIndex]} alt={`Фото отеля ${currentIndex + 1}`} className="gallery-image" />
        <button className="gallery-nav next" onClick={handleNext}>→</button>
        <div className="gallery-counter">{currentIndex + 1} / {images.length}</div>
      </div>
    </div>
  )
}

function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const hotelImages = [hotelImage1, hotelImage2, hotelImage3, hotelImage4]

  useEffect(() => {
    // Запрещаем скролл при загрузке страницы
    document.body.style.overflow = 'hidden'
  }, [])

  const handleYesClick = () => {
    // При клике на кнопку разрешаем скролл и переходим на третью страницу
    document.body.style.overflow = 'auto'
    const detailsPage = document.querySelector('.details-container')
    detailsPage?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToGallery = () => {
    const gallerySection = document.querySelector('.gallery-section')
    gallerySection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="pages-container">
      <div className="main-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Добро пожаловать в Париж</h1>
        <div className="france-text">
          <span className="fr">FR</span>
          <span className="an">AN</span>
          <span className="ce">CE</span>
        </div>
      </div>
      
      <div className="invitation-container">
        <div className="invitation-text">
          <h2>Даша,</h2>
          <p>В этот особенный день я хочу, чтобы ты мысленно оказалась в Париже.</p>
          <p>Пока что — только мысленно...</p>
          <p>Но это — временно. Потому что мы туда полетим! ✈️🇫🇷</p>
          <p>А пока — познакомься с нашим отелем, датой вылета и тем, сколько дней мы там проведём.</p>
          <p className="question">Готова ли ты к маленькому приключению? 💫</p>
          <button className="yes-button" onClick={handleYesClick}>Да!</button>
        </div>
      </div>

      <div className="details-container">
        <div className="details-content">
          <div className="flights-section">
            <h2 className="section-title">Твои билеты ✈️</h2>
            <div className="flight-card">
              <div className="flight-header">
                <div className="date">
                  <div className="day">04</div>
                  <div className="month">JUL</div>
                </div>
                <div className="flight-time">17:10</div>
                <div className="flight-city">Gdansk</div>
              </div>
              
              <div className="flight-info">
                <div className="duration">2h 15m</div>
                <div className="flight-number">FR8943</div>
              </div>
              
              <div className="flight-footer">
                <div className="flight-time">19:25</div>
                <div className="flight-city">Paris Beauvais</div>
              </div>
            </div>

            <div className="flight-card return">
              <div className="flight-header">
                <div className="date">
                  <div className="day">07</div>
                  <div className="month">JUL</div>
                </div>
                <div className="flight-time">22:25</div>
                <div className="flight-city">Paris Beauvais</div>
              </div>
              
              <div className="flight-info">
                <div className="duration">2h 5m</div>
                <div className="flight-number">FR8942</div>
              </div>
              
              <div className="flight-footer">
                <div className="flight-time">00:30</div>
                <div className="flight-city">Gdansk</div>
              </div>
            </div>

            <button className="gallery-button" onClick={handleScrollToGallery}>
              Посмотреть отель
              <span className="arrow-down">↓</span>
            </button>
          </div>
        </div>
      </div>

      <div className="gallery-section">
        <div className="hotel-section">
          <h2 className="section-title">Наш отель ⭐️</h2>
          <div className="hotel-card">
            <h3>Hôtel La Conversation</h3>
            <p className="hotel-address">61 rue Brancion, 15-й округ: Порт-де-Версаль, 75015 Париж</p>
            <div className="hotel-rating">
              <span className="rating-score">9.0</span>
              <span className="rating-text">Превосходно</span>
              <span className="review-count">1 640 отзывов</span>
            </div>
            <div className="hotel-features">
              <div className="feature">✨ Стильный дизайн</div>
              <div className="feature">🥐 Классный завтрак</div>
              <div className="feature">🏰 10 минут до центра</div>
              <div className="feature">🚽 Отдельная ванная</div>
            </div>
            <div className="attractions">
              <h4>🗺️ Расстояния</h4>
              <div className="attraction-list">
                <div className="attraction-item">
                  <span>Эйфелева башня</span>
                  <span>3,4 км</span>
                </div>
                <div className="attraction-item">
                  <span>Лувр</span>
                  <span>4,4 км</span>
                </div>
                <div className="attraction-item">
                  <span>Триумфальная арка</span>
                  <span>5 км</span>
                </div>
              </div>
            </div>
            <button className="gallery-button" onClick={() => setIsGalleryOpen(true)}>
              Галерея отеля
              <span className="arrow-right">→</span>
            </button>
          </div>
        </div>
      </div>
      <Gallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} images={hotelImages} />

      <div className="dates-section">
        <div className="dates-content">
          <div className="dates">
            <div className="date-range">
              <div className="date-block">
                <div className="date-number">04</div>
                <div className="date-month">июля</div>
              </div>
              <div className="date-separator">—</div>
              <div className="date-block">
                <div className="date-number">07</div>
                <div className="date-month">июля</div>
              </div>
            </div>
            <div className="date-year">2025 года</div>
          </div>
          <p className="date-message">Надеюсь, ты запомнишь эту дату ❤️</p>
        </div>
      </div>
    </div>
  )
}

export default App
