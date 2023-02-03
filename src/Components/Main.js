import React from 'react'
import './Style.css'

function Main() {
  return (
    <div>
      <div className="top-wrapper">
          <div className="container">
            <h1>BELAJAR CODING.</h1>
            <h1>LANDING PAGE.</h1>
            <p>Landing Page dari Kelompok 3 TEFA</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="btn-wrapper">
              <a href="#" className="btn signup">Daftar dengan Email</a>
              <p>atau</p>
              <a href="#" className="btn facebook"><span className="fa fa-facebook" />Daftar dengan Facebook</a>
              <a href="#" className="btn twitter"><span className="fa fa-twitter" />Daftar dengan Twitter</a>
            </div>
          </div>
        </div>
        <div className="lesson-wrapper">
          <div className="container">
            <div className="heading">
              <h2>Cari tau dari mana anda mau memulai!</h2>
            </div>
            <div className="lessons">
              <div className="lesson">
                <div className="lesson-icon">
                  <img src="https://prog-8.com/images/html/advanced/html.png" />
                  <p>HTML &amp; CSS</p>
                </div>
                <p className="text-contents">Bahasa yang digunakan untuk membuat dan mendesain tampilan situs web Anda. </p>
              </div>
              <div className="lesson">
                <div className="lesson-icon">
                  <img src="https://prog-8.com/images/html/advanced/jQuery.png" />
                  <p>jQuery</p>
                </div>
                <p className="text-contents">Library JavaScript yang cepat, kaya akan fitur, dan mudah digunakan yang menangani animasi dan permintaan Ajax.</p>
              </div>
              <div className="lesson">
                <div className="lesson-icon">
                  <img src="https://prog-8.com/images/html/advanced/ruby.png" />
                  <p>Ruby</p>
                </div>
                <p className="text-contents">Bahasa dinamis, serba guna yang sederhana dan produktif. Ruby sering digunakan untuk membuat aplikasi web yang responsive.</p>
              </div>
              <div className="lesson">
                <div className="lesson-icon">
                  <img src="https://prog-8.com/images/html/advanced/php.png" />
                  <p>PHP</p>
                </div>
                <p className="text-contents">Bahasa skrip open source yang dapat disematkan ke dalam HTML, dan cocok untuk pengembangan web.</p>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="message-wrapper">
          <div className="container">
            <div className="heading">
              <h2>Apakah anda siap untuk menjadi programer yang handal?</h2>
              <h3>Ayo belajar coding, ayo belajar menjadi lebih kreatif!</h3>
            </div>
            <span className="btn message">Mulai Belajar</span>
          </div>
        </div>
    </div>
  )
}

export default Main
