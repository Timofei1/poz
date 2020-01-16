import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';

import { Div, Tabbar, TabbarItem, Gallery } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Article from '@vkontakte/icons/dist/24/article';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';


const Persik = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Новости</PanelHeader>
		<Tabbar>
		<TabbarItem
            onClick={go}
            data-to="home"
            data-story="feed"
          ><Icon28KeyboardBotsOutline  /></TabbarItem>
		  <TabbarItem
            onClick={go}
			data-to="persik"
			label="new"
            data-story="feed"
          ><Icon28ArticleOutline fill="#0000FF" /></TabbarItem>
		  <TabbarItem
            onClick={go}
            data-to="persik1"
            data-story="feed"
            ><Icon28SettingsOutline /></TabbarItem>
        </Tabbar>

		<Gallery
                slideWidth="80%"
                style={{ height: 300 }}
                bullets="dark"
              >
                <div>
                <img src="https://sun9-40.userapi.com/c857428/v857428281/129f55/z9pT8aN9oI0.jpg" width="1000" height="300" />
                </div>
                <div>
                <img src="https://sun9-49.userapi.com/c857320/v857320281/87407/cUS8JspjNQU.jpg" width="1000" height="300" />
                </div>
                <div>
                <img src="https://sun9-25.userapi.com/c858424/v858424182/35bd1/TbJ3vc2RMDA.jpg" width="1000" height="300" />
                </div>
              </Gallery>
        <Group>
        <Div>
        <div style={{ display: 'flex' }}>
        <b>Версия 1.0</b><h> </h><div className="Cell__description">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 22.12.2019</div>
        
        </div>
        </Div>
        <Div>
        <i>Релиз приложения.</i>
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
