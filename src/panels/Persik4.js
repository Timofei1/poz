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
      День рождения</PanelHeader>
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
				Тебе желаю море счастья,<br/>
Улыбок, солнца и тепла.<br/>
Чтоб жизнь была еще прекрасней,<br/>
Удача за руку вела!<br/><br/>

Пусть в доме будет только радость,<br/>
Уют, достаток и покой.<br/>
Друзья, родные будут рядом,<br/>
Беда обходит стороной!<br/><br/>

Здоровья крепкого желаю<br/>
И легких жизненных дорог.<br/>
И пусть всегда, благословляя,<br/>
Тебя хранит твой ангелок!<br/>


				</h4>
				<Separator style={{ margin: '12px 0' }} />
				<h4>
				С днем рождения поздравляю<br/>
И желаю день за днем<br/>
Быть счастливее и ярче,<br/>
Словно солнце за окном.<br/><br/>

Пожелаю я здоровья,<br/>
Много смеха и тепла,<br/>
Чтоб родные были рядом<br/>
И, конечно же, добра!<br/><br/>

Пусть деньжат будет побольше,<br/>
Путешествий и любви.<br/>
Чашу полную заботы,<br/>
Мира, света, красоты!<br/>

				</h4>
				<Separator style={{ margin: '12px 0' }} />
<h4>
С днем рожденья поздравляю<br/>
И от всей души желаю<br/>
Радости, любви, успеха,<br/>
Чтобы повод был для смеха!<br/><br/>

Пусть что хочется — случится,<br/>
Ну а счастье — вечно длится,<br/>
Если встретятся невзгоды —<br/>
Пусть не сделают погоды!<br/><br/>

В доме пусть царит порядок,<br/>
В кошельке будет достаток,<br/>
Всего лучшего желаю<br/>
И еще раз поздравляю!<br/>
</h4>
<Separator style={{ margin: '12px 0' }} />

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