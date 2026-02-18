import Logo from './logo.svg';

export default function App() {
    return (
        <div className="App">
            <header>
                <img src={Logo} width="60px"></img>
                <div className='title'>
                    <div>ИНФОРМАЦИОННЫЙ ПОРТАЛ</div>
                    <div className='tehkarta'>ТЕХКАРТА</div>
                </div>

            </header>
            <main>
                <div className='lightString'>Обозначение:</div>
                <div className='darkString'>ТТК-100987457.180-2020</div>
                <div className='lightString'>Наименование:</div>
                <div className='darkString'>Типовая технологическая карта на устройство</div>
                <div className='darkString'>труб бамбуковых</div>
                <div className='lightString'>Действует до:</div>
                <div className='darkString'>2026-04-01</div>
                <div className='lightString'>Приобретена:</div>
                <div className='darkString'>ООО "РогаКопыта"</div>
            </main>



        </div>
    )
}



