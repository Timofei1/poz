import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';

import { Div, Tabbar, TabbarItem, IOS, platform, HeaderButton, Separator } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Article from '@vkontakte/icons/dist/24/article';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';



const osName = platform();

const Persik = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
       left={<HeaderButton onClick={go} data-to="home">
        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
      </HeaderButton>}
      >
      8 марта</PanelHeader>
	<Tabbar>
		<TabbarItem
            onClick={go}
            data-to="home"
            data-story="feed"
          ><Icon28KeyboardBotsOutline /></TabbarItem>
		  <TabbarItem
            onClick={go}
			data-to="persik"
			label="new"
            data-story="feed"
          ><Icon28ArticleOutline /></TabbarItem>
		  <TabbarItem
            onClick={go}
            data-to="persik1"
            data-story="feed"
            ><Icon28SettingsOutline fill="#0000FF"/></TabbarItem>
        </Tabbar>
	
		<Group>
		<Div>
			<center>
			<h4>
			Дорогие, милые женщины!<br/>
Сердечно поздравляем Вас с самым красивым и светлым весенним праздником - днем 8 Марта!<br/>
Природа наделила женщин несравненной красотой и неиссякаемой энергией, душевной нежностью и беззаветной преданностью, жизненной мудростью и удивительным терпением.<br/>
Вы храните семейный очаг, воспитываете детей, добиваетесь успехов в профессиональной и общественной деятельности, оставаясь при этом всегда молодыми и прекрасными.<br/>
В этот весенний день желаем Вам улыбок, замечательного праздничного настроения, семейного счастья, благополучия, здоровья Вам и Вашим близким!<br/>
Будьте всегда обаятельными, женственными и любимыми!<br/>
			</h4>
			<Separator style={{ margin: '12px 0' }} />
		    <h4>
			Пусть в каждом доме будут: счастье,<br/>
Любовь, достаток и уют.<br/>
Пусть все невзгоды и ненастья<br/>
Друзей и близких обойдут.<br/><br/>

Пусть не затронет Вас беда,<br/>
Не обольет слезами горе,<br/>
Чтоб Вы не знали никогда<br/>
Болезней, недругов и боли.<br/><br/>

Не будет пусть у Вас в судьбе<br/>
Потерь навек, разлук надолго.<br/>
Пусть дорогой Вам человек<br/>
Живет на свете долго-долго.<br/><br/>

Пусть все исполнятся мечты<br/>
И от любви Вам станет жарко,<br/>
Я поздравляю от души<br/>
Вас с Женским днем 8 марта.<br/><br/>

Я Вам желаю в день весенний<br/>
Улыбок, нежности, тепла.<br/>
Жизнь станет лучше, без сомнений,<br/>
Коль в мире правит красота!<br/>
			</h4>
			<Separator style={{ margin: '12px 0' }} />
			<h4>
			Красивых слов, приятных снов<br/>
Цветов, цветов, еще цветов…<br/>
Вниманья близких и родных<br/>
ДА, украшений золотых<br/>
Шикарных фраз, горящих глаз<br/>
Цветов еще, еще не раз<br/>
Мужчин, чтоб рядом кто-то был<br/>
Не просто был, а чтоб любил<br/>
Шикарных дней, про ночь молчу…<br/>
Чего еще сказать хочу?<br/>
Звезды на небе, самой яркой<br/>
Веселых праздников, подарков<br/>
Чтобы сбывались все мечты…<br/>
Цветы, цветы, опять цветы<br/>
Погоды солнечной, весенней<br/>
Чтоб поднималось настроенье<br/>
И повториться здесь не грех<br/>
Весны, Любви, Цветов для всех!!!<br/>
			</h4>
			<Separator style={{ margin: '12px 0' }} />
			<h4>
			И снова солнце за окном,<br/>
И снова день восьмого марта,<br/>
Мы соберёмся за столом,<br/>
Будет душевно всё и ярко,<br/>
И будет всюду аромат,<br/>
И от мимоз и от тюльпанов,<br/>
Поздравить каждый будет рад,<br/>
Наполнится столько бокалов,<br/>
И пожелания от души,<br/>
Женщины, вы достояние,<br/>
Вы очень сильно нам нужны,<br/>
Всех благ вам, счастья, процветания!<br/>
			</h4>
			</center>
			</Div>
		</Group>
	
        
		
	</Panel>
	
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Persik;