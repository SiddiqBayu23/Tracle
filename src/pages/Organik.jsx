import { useState } from "react";
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Banner from "../components/Banner"
import Card2 from '../components/Card2';
import DaurUlang from '../components/DaurUlang';

function Organik(){

  // Data
  const[banner, setBanner] = useState({
    gambar: "../src/assets/organik/organik.png", 
    judul: "Sampah Organik", 
    deskripsi: "Sampah organik didefinisikan sebagai sampah yang berasal dari sisa-sisa makhluk hidup, baik hewan, tanaman, maupun manusia. Karena karakteristiknya yang organik, sampah ini sebenarnya bisa terurai sendiri di alam dengan proses alamiah.",
  }) 

  const[organik, setOrganik] = useState([
    {id:1, name:"Buah Busuk", img: "../src/assets/organik/buahbusuk.png"},
    {id:2, name:"Biji", img: "../src/assets/organik/biji.png"},
    {id:3, name:"Daun Kering", img: "../src/assets/organik/daun.png"},
    {id:4, name:"Kotoran Hewan", img: "../src/assets/organik/kotoran.png"},
    {id:5, name:"Kulit Telur", img: "../src/assets/organik/kulit.png"},
    {id:6, name:"Ranting Kering", img: "../src/assets/organik/ranting.png"},
    {id:7, name:"Sayur Busuk", img: "../src/assets/organik/sayurbusuk.png"},
    {id:8, name:"Serabut Kelapa", img: "../src/assets/organik/serabut.png"},
    {id:9, name:"Tulang Hewan", img: "../src/assets/organik/tulang.png"}
  ])

  const[daurulg, setDaurulg] = useState([
    {eventKey: 0, header: "Daur Ulang Sampah Cangkang Telur", judul: "Membuat Kerajinan dari Cangkang Telur", imgex: "../src/assets/organik/KerajinanTelur.jpg", 
      desc: "Cara membuatnya juga sangatlah mudah, yang pertama pilihlah terlebih dahulu kulit telur yang masih bagus. Selanjutnya, bersihkan kulit telur dari kotoran, kemudian keringkan. Berilah warna sesuai dengan karakter yang kalian inginkan, jangan lupakan bentuk mata dan juga hidung agar tampak lebih cantik, dan boneka dari kulit telur sudah siap untuk dijadikan hiasan."},
    {eventKey: 1, header: "Daur Ulang Sampah Organik", judul: "Membuat Kompos Dari Sampah Organik", imgex: "../src/assets/organik/org.jpg",
      desc: "Sampah organik yang anda sisihkan tadi kemudian potong kecil-kecil. Kemudian campur bahan tersebut dengan sepertiga serbuk gergaji atau pupuk kandang. Jika anda menggunakan pupuk kandang seperti kotoran kambing maka buat komposisi 3 : 1. Jangan lupa untuk menambahkan ragi kompos atau Tricholant lalu tutup dengan karung atau plastic. Diamkan sampah hingga 7 hari lamanya sampai membusuk. Setiap hari luangkan waktu Anda untuk mengaduk sampah ini dan atur suhu kompos berkisar 30 – 70 derajat celcius. Jika anda kesulitan dalam mengaduknya taka da salahnya jika ditambahkan air. Kompos yang sudah jadi akan berwarna kecokelatan seperti tanah dan tidak berbau busuk lagi."}
  ])

  return(
    <>
      <Helmet><title>Organik | TRACLE</title></Helmet>

      {/* Banner */}
      <Banner
        gbr={banner.gambar}
        kategori={banner.judul}
        desc={banner.deskripsi}
      />

      {/* Contoh Sampah */}
      <Container fluid>
        <Container className='p-4'>
          <h2 className="text-center my-5">CONTOH</h2>
          <div className='row my-4'>
          {organik.map((item, id) => (
            <Card2
              key={id}
              img={item.img}
              name={item.name}
            />
            ))}
          </div>
        </Container>
      </Container>

      {/* Daur Ulang */}
      <Container fluid className='bg-light'>
        <Container>
          <h2 className="text-center py-5">DAUR ULANG</h2>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {daurulg.map((item, index) => (
              <DaurUlang
                key={index}
                eventKey={item.eventKey} 
                header={item.header}
                judul={item.judul}
                desc={item.desc}
                imgex={item.imgex}
              />
            ))}
          </Accordion>
          <div className='p-4'></div>
        </Container>
      </Container>

    </>
  )
}

export default Organik