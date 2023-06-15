import { useState } from "react"
import { Helmet } from 'react-helmet';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Banner from "../components/Banner"
import Card2 from '../components/Card2';
import DaurUlang from "../components/DaurUlang";

function Anorganik(){

  const[banner, setBanner] = useState({
    gambar: "../src/assets/anorganik/anorganik.png", 
    judul: "Sampah Anorganik", 
    deskripsi: "Sampah anorganik adalah sampah yang dihasilkan dari bahan-bahan non-hayati, baik berupa produk sintetik maupun hasil proses teknologi pengolahan bahan tambang sumber daya alam dan sulit diuraikan oleh alam.",
  })

  const[anorganik, setAnorganik] = useState([
    {id:1, name:"Botol Plastik", img: "../src/assets/anorganik/botolpl.png"},
    {id:2, name:"Botol Kaca", img: "../src/assets/anorganik/kaca.png"},
    {id:3, name:"Kain", img: "../src/assets/anorganik/kain.png"},
    {id:4, name:"Botol Kaleng", img: "../src/assets/anorganik/kaleng.png"},
    {id:5, name:"Keramik", img: "../src/assets/anorganik/keramik.png"},
    {id:6, name:"Kertas", img: "../src/assets/anorganik/kertas.png"},
    {id:7, name:"Logam", img: "../src/assets/anorganik/logam.png"},
    {id:8, name:"Plastik", img: "../src/assets/anorganik/plastik.png"},
    {id:9, name:"Styrofoam", img: "../src/assets/anorganik/styrofoam.png"}
  ])

  const[daurulg, setDaurulg] = useState([
    {eventKey: 0, header: "Daur Ulang Sampah Kertas", judul: "Membuat tatakan gelas dari kertas koran", imgex: "../src/assets/anorganik/tatakangelas.png", 
      desc: "Pembuatan tatakan gelas ini diawali dengan melinting beberapa lembaran koran. Setelah itu, pengrajin dapat mulai menggulung lintingan hingga membentuk pola dan ukuran yang diinginkan. Pada kerajinan ini, pengrajin dapat bebas berkreasi dengan menggabungkan berbagai macam bentuk. Kerajinan yang satu ini dapat membuat ruang makan terlihat lebih indah dan estetik. Tatakan gelas dari koran ini juga dapat dijadikan sebagai ide bisnis dengan keuntungan lumayan. Satu tatakan gelas dapat dibanderol dengan harga 10 ribu hingga 40 ribu rupiah."},
    {eventKey: 1, header: "Daur Ulang Botol Plastik", judul: "Membuat celengan dari botol plastik", imgex: "../src/assets/anorganik/babiplastik.png",
      desc: "Kumpulkan terlebih dahulu bahan dan peralatan yang dibutuhkan. Potong botol bekas menjadi dua, lalu gabungkan kembali. Lubangi botol bekas tersebut untuk tempat memasukkan uang. Cat botol bekas tersebut. Tambahkan hiasan, seperti mata boneka, telinga, dan kaki dari botol. Celengan berbentuk babi dari botol bekas siap untuk digunakan menyimpan uang kamu."}
  ])

  return (
    <>
      <Helmet><title>Anorganik | TRACLE</title></Helmet>
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
          {anorganik.map((item, id) => (
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
export default Anorganik