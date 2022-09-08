import './AWD.scss';

export default function AWD(){


    return <div>
        <div className={'header'}>
            <div className={'header__icon'}/>
            <input placeholder={'Search...'} type={'text'} className={'header__search'}/>
            <div className={'header__menu'}>
                Menu
            </div>
        </div>
        <div className={'body'}>
            <div className={'body__post'}>
                <div className={'body__post__title'}>
                    Title
                </div>
                <div className={'body__post__image'}>

                </div>
                <div className={'body__post__caption'}>
                    Caption
                </div>
            </div>
            <div className={'body__post'}>
                <div className={'body__post__title'}>
                    Title
                </div>
                <div className={'body__post__image'}>

                </div>
                <div className={'body__post__caption'}>
                    Caption
                </div>
            </div>
            <div className={'body__post'}>
                <div className={'body__post__title'}>
                    Title
                </div>
                <div className={'body__post__image'}>

                </div>
                <div className={'body__post__caption'}>
                    Caption
                </div>
            </div>
        </div>
        <div className={'footer'}>
            <div className={'footer__info'}>
                <div className={'footer__info--contact'}>
                    Contact
                </div>
                <div className={'footer__info--channels'}>
                    Channels
                </div>
            </div>
        </div>
    </div>
}