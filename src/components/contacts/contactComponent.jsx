import React from "react";


function Contacts() {
    return (
        <div className="center contacts">
            <div className="cont_left col-lg">
                <div className="card">
                    <p className="cont_title">Поддержка пользователей</p>
                    <ul>
                        <li>support@yeezykassa.com</li>
                    </ul>
                    <a className="send_t" href="https://t.me/yezzykassasupport" target="_blank">Написать</a>
                </div>
                <div className="card">
                    <p className="cont_title">Регламент работы сервиса</p>
                    <ul>
                        <li>
                            Заявки обрабатываются в автоматическом режиме - круглосуточно.
                        </li>
                        <li>
                            Поддержка доступна в будние дни - с 8:00 до 23:00
                        </li>
                        <li>
                            Консультации по вопросам, поступившие в нерабочие часы, будут предоставлены по возможности максимально оперативно.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cont_mid col-lg">
                <div className="card">
                    <p className="cont_title">О сервисе</p>
                    <ul>
                        <li>
                            yeezykassa.com - электронный обменный сервис. Любая обменная операция проводится в автоматическом режиме, что гарантирует клиенту получение средств на кошелек или банковскую карту в любое время и без задержек.
                        </li>
                        <li>
                            Наш обменный пункт один из немногих - который предлагает выводить электронные деньги на банковские карты международных платежных систем Visa и MasterCard. Мы обладаем собственным, сертифицированным процессингом, для выплат платежей на банковские карты!
                        </li>
                        <li>
                            Ежедневно yeezykassa.com обрабатывает сотни операций с Bitcoin, Ether, Tron. Для этих целей мы постоянно развиваем и поддерживаем бесперебойную работу собственных серверов - нод, что выгодно отличает нас от большинства мелких обменных сервисов, которые используют API посредников. С помощью yeezykassa.com наши клиенты могут вывести нужную криптовалюту на банковскую карту за считанные секунды.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cont_right col-lg">
                <div className="card">
                    <p className="cont_title">Наши партнеры</p>
                    <p className="cont_partners">
                        <span className="partners"><img src="/img/bits-media.png" alt="" /></span>
                        <span className="partners"><img src="/img/monitoring-bits-media.png" alt="" /></span>
                        <span className="partners"><img src="/img/mmgp.png" alt="" /></span>
                        <span className="partners"><img src="/img/glazok.png" alt="" /></span>
                        <span className="partners"><img src="/img/kurs-expert.png" alt="" /></span>
                        <span className="partners"><img src="/img/pro-obmen.png" alt="" /></span>
                        <span className="partners"><img src="/img/proex.png" alt="" /></span>
                        <span className="partners"><img src="/img/exchange-sumo.png" alt="" /></span>
                        <span className="partners"><img src="/img/cryptotalk.png" alt="" /></span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Contacts