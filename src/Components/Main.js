import React from 'react'
import './Style.css'

function Main() {
  return (
    <div>
      <div className="top-wrapper">
          <div className="container">
            <h1>BELAJAR CODING.</h1>
            <h1>LANDING PAGE.</h1>
            <p>Landing Page dari Kelompok 3 TEFA Frontend SMK Telkom Malang</p>
            <p>Maju Tak Gentarrr bersama Kelompok 3</p>
            <div className="btn-wrapper">
              <a href="#" className="btn signup">About Us</a>
              <p></p>
              <a href="#" className="btn facebook"><span className="fa fa-facebook" />Dream Job</a>
              <a href="#" className="btn twitter"><span className="fa fa-twitter" />Fun Fact</a>
            </div>
          </div>
        </div>
        <div className="lesson-wrapper">
          <div className="container">
            <div className="heading">
              <h2>Cari tahu, ada siapa aja sih di Kelompok Tiga?!</h2>
            </div>
            <div className="lessons">
              <div className="lesson" id='con1'>
                <div className="lesson-icon">
                  <img src="https://prog-8.com/images/html/advanced/html.png" />
                  <p>Arlando Farrel</p>
                </div>
                <p className="text-contents">Farrel menyukai hal yang berbau video game. Bermain video game merupakan kegiatan yang menyenangkan. Dengan bermain game kita dapat sedikit melepaskan penat</p>
              </div>
              <div className="lesson" id='con2'>
                <div className="lesson-icon">
                  <img src="https://prog-8.com/images/html/advanced/jQuery.png" />
                  <p>Fadhila Zalfa </p>
                </div>
                <p className="text-contents">Zalfa menyukai hal yang berbau seni. Seni khususnya melukis merupakan kegiatan yang menyenangkan. Dengan melukis dia dapat menuangkan seluruh ide dan kreativitas yang di miliki.</p>
              </div>
              <div className="lesson" id='con3'>
                <div className="lesson-icon">
                  <img src="https://prog-8.com/images/html/advanced/ruby.png" />
                  <p>Griselda Putri</p>
                </div>
                <p className="text-contents">Grisel menyukai kegiatan menulis. Menulis merupakan kegiatan yang menyenangkan. Dengan menulis kita bisa mengapresiasikan semua yang kita rasakan melalui sebuah tulisan. </p>
              </div>
              <div className="lesson" id='con4'>
                <div className="lesson-icon">
                  <img src="https://prog-8.com/images/html/advanced/php.png" />
                  <p>Khusnul Faddila</p>
                </div>
                <p className="text-contents">Dila menyukai hal yang berbau multimedia. Multimedia merupakan kegiatan yang sangat menyenangkan. Di bidang multimedia ini, dila dapat mengasah semua potensi dan bakat yang dila miliki khususnya dalam bidang fotografi.</p>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
        <div className="message-wrapper">
          <div className="container">
            <div className="heading">
              <h2>Website ini adalah kumpulan dari biodata semua anggota kelompok kami</h2>
              <h3>Masih penasaran? Ayo telusuri lebih dalam lagi!</h3>
            </div>
            <span className="btn message">Explore</span>
          </div>
        </div>
    </div>
  )
}

export default Main
