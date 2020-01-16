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
     9 мая</PanelHeader>
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
					Воевали наши деды<br/>
За наш мир, к плечу плечом.<br/>
Поздравляю с Днем Победы,<br/>
С этим майским славным днем.<br/><br/>

Больше пусть войны не будет,<br/>
Пусть не тронут слезы глаз.<br/>
Я прошу: цените, люди,<br/>
То, что сделано для вас.<br/><br/>

Берегите день, минуту,<br/>
Снова чтоб не быть войне.<br/>
Пусть лишь взрывы от салюта<br/>
Раздаются в вышине.<br/><br/>

Пусть же будет страх неведом,<br/>
Не коснется пусть беда.<br/>
Как досталась нам победа,<br/>
Не забудьте никогда!<br/>
                  </h4>
				  <Separator style={{ margin: '12px 0' }} />
                    <h4>
					Вроде лет прошло не мало,<br/>
Но навечно помним мы,<br/>
Подвиг и святую славу,<br/>
В своем сердце сберегли.<br/><br/>

Поздравляю вас с Победой,<br/>
Что досталась тяжело,<br/>
И трудом и кровью деда,<br/>
Что стоял — врагам назло.<br/><br/>

Поздравляю, с тем, что живы,<br/>
Что свободны мы сейчас,<br/>
Вам спасители «Спасибо»,<br/>
Любим, чтим, и помним вас!<br/>

					</h4>
					<Separator style={{ margin: '12px 0' }} />
                   <h4>
				   Великий праздник — День Победы,<br/>
Памятная дата для страны.<br/>
Её отвоевали наши деды,<br/>
Стоила она им дорогой цены!<br/><br/>

И этот день мы будем помнить вечно,<br/>
Их подвиг в сердце навсегда.<br/>
Им благодарны бесконечно,<br/>
Спасли нам жизнь они тогда.<br/><br/>

Желаем мира во всём мире,<br/>
И не познать вам страх войны.<br/>
Чтоб счастливо всегда все жили,<br/>
Спокойствием, добром окружены.<br/>


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