import React from 'react';

import { Box, Typography, List, ListItem } from '@mui/material';

export function Contacts({ userInfo }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 260,
        justifyContent: 'space-between',
        marginTop: 30,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 32,
            letterSpacing: 0.15000000596046448,
            textAlign: 'left',
            marginBottom: 10,
          }}
        >
          Email
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 20.02,
            letterSpacing: 0.17000000178813934,
            textAlign: 'left',
          }}
        >
          {userInfo.email}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 32,
            letterSpacing: 0.15000000596046448,
            textAlign: 'left',
            marginBottom: 10,
          }}
        >
          Телефон
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 20.02,
            letterSpacing: 0.17000000178813934,
            textAlign: 'left',
          }}
        >
          {userInfo.telephone}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: 20,
            fontWeight: 500,
            lineHeight: 32,
            letterSpacing: 0.15000000596046448,
            textAlign: 'left',
            marginBottom: 10,
          }}
        >
          Социальные сети
        </Typography>

        <List>
          <ListItem>
            <a href={userInfo.socials.vk}>
              <img src="vk.jpg" alt="Значок ВК" />
            </a>
            <a href={userInfo.socials.vk}>
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: 32,
                  letterSpacing: 0.15000000596046448,
                  textAlign: 'left',
                  marginLeft: 32,
                }}
              >
                Vkontakte
              </Typography>
            </a>
          </ListItem>
          <ListItem>
            <a href={userInfo.socials.telegram}>
              <img src="telegram.png" alt="Значок ТГ" />
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: 32,
                  letterSpacing: 0.15000000596046448,
                  textAlign: 'left',
                }}
              >
                Telegram
              </Typography>
            </a>
          </ListItem>
          <ListItem>
            <a href={userInfo.socials.whatsup}>
              <img src="whatsapp.png" alt="Значок Ватсапп" />
              <Typography
                sx={{
                  fontFamily: 'Roboto',
                  fontSize: 20,
                  fontWeight: 500,
                  lineHeight: 32,
                  letterSpacing: 0.15000000596046448,
                  textAlign: 'left',
                }}
              >
                WhatsApp
              </Typography>
            </a>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
