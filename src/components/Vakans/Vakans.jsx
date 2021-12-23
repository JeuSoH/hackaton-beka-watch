import React from "react";
import { Link } from "react-router-dom";
const Vakans = () => {
    return (
        <>
            <div className="container">
                <div className="cat_content">
                    <div className="det_nav">
                        <button className="back_det">
                            <Link to="/">Назад </Link>
                        </button>
                    </div>
                </div>
                <h1 className="foot_sh">Вакансии</h1>
                <p>
                    Ищешь интересную работу? Любишь кроссовки, как любим их мы,
                    и хочешь знать индустрию изнутри? Присоединяйся к команде
                    Street Head! Стань частью молодой и яркой команды, которой
                    близки по духу спорт и сникер-культура.
                </p>
                <p>
                    Все вопросы о наших вакансиях ты можешь задать по телефону
                    горячей линии +(996) 999-77-99-47 (звонок по Кыргызстану
                    бесплатный)
                </p>
                <p>Мы рассматриваем заявки от лиц старше 18 лет.</p>
                <ul>
                    <li>Работа в дружной команде</li>
                    <li>озможность влиять на свой доход, белая ЗП</li>
                    <li>Карьерный и профессиональное рост</li>
                    <li>
                        Официальное трудоустройство по ТК РФ, график работы 5/2
                    </li>
                    <li>
                        Скидки по партнерским программам (фитнес, кредитование,
                        путешествия, развлечения).
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Vakans;
