import './NM.scss';

export default function NM(){


    return <div>
        <div className={'header'}>
            <div className={'icon'}/>
            <input placeholder={'Search...'} type={'text'} className={'search'}/>
            <div className={'menu'}>
                Menu
            </div>
        </div>
        <div className={'body'}>
            <div className={'post'}>
                <div className={'title'}>
                    Title
                </div>
                <div className={'image'}>

                </div>
                <div className={'caption'}>
                    Caption
                </div>
            </div>
            <div className={'post'}>
                <div className={'title'}>
                    Title
                </div>
                <div className={'image'}>

                </div>
                <div className={'caption'}>
                    Caption
                </div>
            </div>
            <div className={'post'}>
                <div className={'title'}>
                    Title
                </div>
                <div className={'image'}>

                </div>
                <div className={'caption'}>
                    Caption
                </div>
            </div>
        </div>
        <div className={'footer'}>
            <div className={'info'}>
                <div className={'contacts'}>
                    Contact
                </div>
                <div className={'channels'}>
                    Channels
                </div>
            </div>
        </div>
    </div>
}