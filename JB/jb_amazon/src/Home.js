import React from 'react';
import './Home.css'
import Product from './Product';

function Home(props){
    return(
        <div className="home">
            <div className='home-container'>
                <img className='home_image' src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg"
                alt=""/>
                <div className='home_row'>
                    <Product id="2323" title="근성" price={3000} image="https://en.pimg.jp/024/292/158/1/24292158.jpg" rating={5}/>
                    <Product id="2320" title="옷" price={200} image="https://m.media-amazon.com/images/I/91tJ13e9R-L._AC_UL320_.jpg" rating={3}/>
                </div>

                <div className='home_row'>
                <Product
      title="엄청난 신발"
      price={100}
      rating={1}
      ratinghalf = {0}
      image='https://m.media-amazon.com/images/I/61aI394Sk0L._AC_UL320_.jpg'
    />
                <Product
      title="SSAFY 10기 모집"
      price={1000000}
      rating={4}
      ratinghalf = {1}
      image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MTVfMjQ1%2FMDAxNTg5NDk5NzY0NzQx.mq-nDWd2__Cr91_Awou2WldjV41Q7XdaLN8RnLfypyIg.M7IgMRrtTO_YeFjqAu3BKJ-1E_Xy1DUFScnvDjpfGSUg.JPEG.koyak2000%2F1589499763221.jpg&type=sc960_832'
    />
                <Product
      title="BBQ 황금올리브 핫윙"
      price={30000}
      rating={10}
      ratinghalf = {0}
      image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MTVfMTQ5%2FMDAxNTg2OTU2MjE4ODU0.0_VrcLu3RB3wgW0nVWOUnCS5-R7E85AXLNUw65gHHtsg.JJ8UpcjQMyJg6800M57YOMGYZldALxESz_GPleJpJBQg.JPEG.moon86861%2F1586956217970.jpg&type=sc960_832'
    />
                </div>

                <div className='home_row'>
                <Product
      title="벌금"
      price={20000}
      rating={0}
      ratinghalf = {1}
      image='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjhfMjM2%2FMDAxNjY2OTM3OTk1MjU1.NtcvJq_O1zHLZORXnSTb8wxKTeGlY9iceGUP8siXgT4g.wJDDE38D5Qrd-hzpTxQkX65Hi7j6PJvRgR9_eWrb7f4g.JPEG.ywoolaw8%2F19907794.jpg&type=sc960_832'
    />
                    </div>
            </div>
        </div>
    );
}

export default Home;