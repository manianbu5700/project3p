# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AlertHandling.spec.js >> Alert Handling
- Location: tests\AlertHandling.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@class="btn btn-primary"]')
    - locator resolved to <button onclick="confirmbox()" class="btn btn-primary">click the button to display a confirm box </button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    30 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7]:
        - /url: http://www.automationtesting.in
        - img [ref=e8]
      - heading [level=1] [ref=e10]: Automation Demo Site
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link [ref=e16]:
            - /url: Index.html
            - text: Home
        - listitem [ref=e17]:
          - link [ref=e18]:
            - /url: Register.html
            - text: Register
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: WebTable.html
            - text: WebTable
        - listitem [ref=e21]:
          - link [ref=e22]:
            - /url: SwitchTo.html
            - text: SwitchTo
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link [ref=e25]:
            - /url: Widgets.html
            - text: Widgets
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link [ref=e28]:
            - /url: Interactions.html
            - text: Interactions
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link [ref=e31]:
            - /url: SwitchTo.html
            - text: Video
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link [ref=e34]:
            - /url: WYSIWYG.html
            - text: WYSIWYG
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link [ref=e37]:
            - /url: "#"
            - text: More
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link [ref=e40]:
            - /url: http://practice.automationtesting.in/
            - text: Practice Site
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link [ref=e48]:
          - /url: "#OKTab"
          - text: Alert with OK
      - listitem [ref=e49]:
        - link [ref=e50]:
          - /url: "#CancelTab"
          - text: Alert with OK & Cancel
      - listitem [ref=e51]:
        - link [ref=e52]:
          - /url: "#Textbox"
          - text: Alert with Textbox
    - button [ref=e54] [cursor=pointer]: "click the button to display an alert box:"
  - generic [ref=e56]:
    - insertion [ref=e59]:
      - generic [ref=e62]:
        - heading [level=2] [ref=e64]: Discover more
        - link [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: Constitutional Law & Civil Rights
          - img [ref=e68]
        - link [ref=e70] [cursor=pointer]:
          - generic [ref=e71]: Internet & Telecom
          - img [ref=e73]
        - link [ref=e75] [cursor=pointer]:
          - generic [ref=e76]: Input Devices
          - img [ref=e78]
        - link [ref=e80] [cursor=pointer]:
          - generic [ref=e81]: Factory Automation
          - img [ref=e83]
        - link [ref=e85] [cursor=pointer]:
          - generic [ref=e86]: TV & Video
          - img [ref=e88]
        - link [ref=e90] [cursor=pointer]:
          - generic [ref=e91]: Software testing solutions
          - img [ref=e93]
        - link [ref=e95] [cursor=pointer]:
          - generic [ref=e96]: Software testing resources
          - img [ref=e98]
        - link [ref=e100] [cursor=pointer]:
          - generic [ref=e101]: JavaScript alert methods
          - img [ref=e103]
    - insertion [ref=e107]:
      - generic [ref=e110]:
        - heading [level=2] [ref=e112]: Discover more
        - link [ref=e113] [cursor=pointer]:
          - generic [ref=e114]: Intellectual Property
          - img [ref=e116]
        - link [ref=e118] [cursor=pointer]:
          - generic [ref=e119]: Home automation guide
          - img [ref=e121]
        - link [ref=e123] [cursor=pointer]:
          - generic [ref=e124]: Performing Arts
          - img [ref=e126]
        - link [ref=e128] [cursor=pointer]:
          - generic [ref=e129]: Alert box examples
          - img [ref=e131]
        - link [ref=e133] [cursor=pointer]:
          - generic [ref=e134]: Web development tools
          - img [ref=e136]
        - link [ref=e138] [cursor=pointer]:
          - generic [ref=e139]: Web automation tools
          - img [ref=e141]
        - link [ref=e143] [cursor=pointer]:
          - generic [ref=e144]: Automation testing guide
          - img [ref=e146]
        - link [ref=e148] [cursor=pointer]:
          - generic [ref=e149]: Automation demo site
          - img [ref=e151]
    - insertion [ref=e155]:
      - generic [ref=e158]:
        - heading [level=2] [ref=e160]: Discover more
        - link [ref=e161] [cursor=pointer]:
          - generic [ref=e162]: Confirm box tutorials
          - img [ref=e164]
        - link [ref=e166] [cursor=pointer]:
          - generic [ref=e167]: TV & Video Equipment
          - img [ref=e169]
        - link [ref=e171] [cursor=pointer]:
          - generic [ref=e172]: Acting & Theater
          - img [ref=e174]
        - link [ref=e176] [cursor=pointer]:
          - generic [ref=e177]: Software
          - img [ref=e179]
        - link [ref=e181] [cursor=pointer]:
          - generic [ref=e182]: Software Utilities
          - img [ref=e184]
        - link [ref=e186] [cursor=pointer]:
          - generic [ref=e187]: Test automation course
          - img [ref=e189]
        - link [ref=e191] [cursor=pointer]:
          - generic [ref=e192]: Automation testing software
          - img [ref=e194]
        - link [ref=e196] [cursor=pointer]:
          - generic [ref=e197]: Content Management
          - img [ref=e199]
    - insertion [ref=e203]:
      - generic [ref=e206]:
        - heading [level=2] [ref=e208]: Discover more
        - link [ref=e209] [cursor=pointer]:
          - generic [ref=e210]: Web Apps & Online Tools
          - img [ref=e212]
        - link [ref=e214] [cursor=pointer]:
          - generic [ref=e215]: Website automation services
          - img [ref=e217]
        - link [ref=e219] [cursor=pointer]:
          - generic [ref=e220]: Register automation tools
          - img [ref=e222]
        - link [ref=e224] [cursor=pointer]:
          - generic [ref=e225]: UI testing tools
          - img [ref=e227]
        - link [ref=e229] [cursor=pointer]:
          - generic [ref=e230]: Automation testing platform
          - img [ref=e232]
        - link [ref=e234] [cursor=pointer]:
          - generic [ref=e235]: Development Tools
          - img [ref=e237]
        - link [ref=e239] [cursor=pointer]:
          - generic [ref=e240]: Automation testing training
          - img [ref=e242]
        - link [ref=e244] [cursor=pointer]:
          - generic [ref=e245]: Automation consulting
          - img [ref=e247]
    - contentinfo [ref=e250]:
      - generic [ref=e252]:
        - generic [ref=e253]:
          - text: "\"@ 2016\""
          - link [ref=e254]:
            - /url: "#"
            - text: Automation Testing
          - text: "\"All Rights Reserved.\""
        - generic [ref=e255]:
          - link [ref=e256]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e257]: 
          - link [ref=e258]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e259]: 
          - link [ref=e260]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e261]: 
          - link [ref=e262]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e263]: 
          - link [ref=e264]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e265]: 
  - insertion [ref=e266]:
    - iframe [ref=e269]:
      - iframe [ref=f12e1]:
        - generic [ref=f15e2]:
          - link "Advertisement" [ref=f15e4]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssh0G7KuuFE7trixtDXS06k6IISP_xPvl3dHgEBI-0v-gQmXQvSHsquDEIoylX7sockaYDZepwLEe9tTcAsePz-iqLHMqOeIV0-SzxuQhM35ilKII4Q5CBPko-DfE_9JMGuVPJn6JgEyqwQUzdunYOG-eSxSGUfRgGB6Fc9hYw5qjuYW_Cp8_rK6zmBX-g62bYadCUNySTXRnHkg_R8bmXA0ImvI3oh-Y119qJz-MJ0UCK1VKLX69J2Y7fROnyMROO5irAPQqLTZbQ49IPm-k2npi-Olx8CjH1UliOtqXLbeZzEDS6IOgGS_JXyjavS-SAOFbcBMQR2DHDcNnlB4-QvOdN6JSgXCX3so68XTZQM7HZs6UWNFKB05KHE18m9PbRHCGMTvLhb7yEAppBzhbXlD4yun4ioPDHVNvrZtDzWOy4tBv_t-RS4_TjkXlXsDvJcHetTPbk7qCiouFcpz3rvXziOcMNRzxp8845O8ImgQGAAp7q2IanleIFg2rCT9VqZ7j-w0Jxr2-8bvGl84ef_qjCT5i5zHeQp0HtK7E3oX-8WHPcuhbNKHZZYa9vGWAY0qRm7LqSkSlj3J8Kn4ntVK9TQFeNGHDDqCaO28mjUb5pWjCnKc6_olwi_5_opzLOhbVxHsqhUSf1ZEsowpjgRKTArwVMEXcx1MUGYl73y2mGCZDi5f8SrVbOor2ZQFDBvFr7C11eus_z-FUDtS9qgLe3NnSqZq-tUrW0PyUQauRbpgT3pX6EicEyD4hyxapYidSHU_a4BVEQeiZcUcVzy7GXyVZBQH_PZwR9A5gEXwEL0_sYBQpokEqN_m11ybkc6b71JxSE6y1tmab64G8hh4Yjtp5A4J_AZ80gvJcaQMPZtmw1xF0GfA-gYyaEUn3WRHYNhWOiqIUhsSh0s8vhJR0AmzrykWOhA45q-Q3Okku3zUj1cRWYwHOlZqNI6mwE09nXU5w4-KNl6UvuVetE87sGNTakj2vroSoi-tMmLXxgWakPY9EVo2fy86saXbyKmwmPm_nHaSRbGHKRSMPCownCFzXOtlTSZn4jT4F1fxX6IA0UkNDPunCh6kmmpdY1a_1sgXiFV4aj2OwW2ugr1amVNVrVTVOOyrc_COqVG714K1TeHLsGyhCUh3U-YczmKhOKn_Es6mK6sq87reUYgWCHl0TJm8LK9zhy0F0M2t-yKad4cMMjaLK46q-3hZKPAkAMvDhna6Ccl84x8D-P27McCivnkqoy_MKtcuAsSE-5ksmUefNabK-76IjA3N5X2LZv9Nm3EzvFGiGvCKCk-MfA6dtL0lgpuaAL_sY6QjMgBMZx-utR9UPrs9TRTF1ft2xWf2JmOwAVVcozykf0zASNsZuus_i9aiE0gifB-76XYJx-ptCPMjySS2Wr00EUafhC0_XATqnllQFOZrYSiYJVfnV_vUgIHPS3ll2MXaotoKi6QBMq131NxTSiz-usSxJlg5h47lzuRKtEyS4Fel8Ktd1YGZwZumjEJxYHiPlzqlFraonC9lbnUVr0x6OP7Usrpo7emalkrFrZEO22jel57UuwpQfeztcYY38bVYbYMepIHtQd75QKoThV5jEpjfNA3EDv8zlhJGPppJmjZwJ2gYDPJgvaMxSzPspwahJa9Vw-0PcQE9YyG2ChfOWtxY8uf-1aodq08HFaN2X8JyBAs-JkAPhSfqT4OCZ_8qnF4EipDPN9YZVBPO8PQNTo0KvtmCgyEIHJN21gWS5Lfw8YEasvAMPcyM3wjASP5noaA33kD_e6AxU2FjhO_f3ZOT5lB7PlBZukvAjRTTlO7ZcH3ADzSpXfjNP41WtxDx41Sa5W4OOlpM_BhXhVPG7EmJtPGMwQ_2ProPtrZDX1F&sai=AMfl-YTII1f8_g_banL48YzmXxSMllOcGYULEsJdHDZ9bJ8QSSfjFao_6GqgUJmMgJq3ba2qOWgjqkMuqSfM9fczLtzotyRayiE2l3jK9DQN9sBxXJL51Yq-cdW6kjzxcDSGNMQsvh4XA8qsruXxX0LaepIiPp25bJB79sQDZPXAe0O1Eld_mggZbM2_cOhHoJUWXq7ejcrKwNP5uNXNtlCbj7hq1QXESEWafHOMlgBHi-IfLFj6Lg9snEDKHakdxUHZYbPOPelbMx-7VSSuJ9RvgAC_MoqFS_3a4LDrW3coT3pK8vi4RVn1uSZwoAz5QwlrVqFr1BzBymGCg6fVB-LA0eTQPDp3t1tB3oLW-ekitKASTCQhPZuSmaWS9qzjit-UElNVC9I5-reP0ewX2zYIuf88PCdqV4avJc93_C9KuOBb5POwUZuQa9aNCG-8WdPTHwRv3txYLfvZr1Qy8jSAGGFyG5icdR4kEn6gwhDI4iG-5IkagC_iHQ_4aJz7ISBPVZ4hVO6wvZH6rJ-yLPsLVebyIYFJnHlKMvM1WTPxRrcI7iQhqG4Ub2Xqe2gr89jZrLtBAgdjS43G9QkiAOnHuC4pKqnEizMhT4eFOjM1Ic3QVZ8tDg9x3IK_1pXAEBqIrY6nK2rkNsvb0fKDg6DwTEA5GFB8QQlH7J7h-EVLoHKz40kpOTryM5QVcdkMhyW73rj-N_iHRT9W5yQxPtCHQQCrfKgapY59NjIvCcuXxmUxS33j15HWUww4bth4THfUu1FC_YyMjZu35G_-HPmNj5kp19Xd5QaGxMBJSJ5YelRGRgX99Ns7Zwzw8LaWAEuKueUMHn9GJkzqYekgf-4fKqXxqqHmh8zOSUUv1Yf-6PEkpodwDKqqdNQblBcj8LG_1TgZ1Vv-GX4pBxs2xMDDfFU&sig=Cg0ArKJSzKV8LgxJ2Hn6&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://bioderma.naosindia.in/products/sebium-gel-moussant%3Futm_source%3Ddv360%26utm_medium%3Dpaid%26utm_campaign%3Din_bio_dv360_all_always-on_sebium_na_awareness_sgm-p1-display%26utm_content%3Dnative_local_sgm_inmarket-custom-intent%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23610145097
            - img "Advertisement" [ref=f15e5]
          - generic [ref=f15e6]:
            - generic:
              - img [ref=f15e10] [cursor=pointer]
              - button [ref=f15e12] [cursor=pointer]:
                - img [ref=f15e13]
```

# Test source

```ts
  1  | //Alert Handling
  2  | import { test } from '@playwright/test'
  3  | 
  4  | test('Alert Handling', async ({ page }) => {
  5  |     await page.goto('https://demo.automationtesting.in/Alerts.html')
  6  | 
  7  |     //Simple Alert
  8  |     await page.on('dialog', async (dialog) => {  //Handling multiple Alerts at a same time
  9  |         await dialog.accept()
  10 |         console.log("Simple Alert:", dialog.message())
  11 |     })
  12 | 
  13 |     await page.locator('//button[@onclick="alertbox()"]').click()
  14 | 
  15 |     //Confirmation Alert
  16 |     await page.locator('(//a[@class="analystic"])[2]').click()
  17 | 
  18 |     // await page.once('dialog', async (dialog) => {
  19 |     //     await dialog.dismiss()
  20 |     //     console.log('Confirmation Alert:', dialog.message())
  21 |     // })
  22 | 
> 23 |     await page.locator('//button[@class="btn btn-primary"]').click()
     |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 | 
  25 |     //Prompt Alert
  26 |     await page.locator('(//a[@class="analystic"])[3]').click()
  27 | 
  28 |     // await page.once('dialog', async (dialog) => {
  29 |     //     await dialog.accept('Hii Buddy')
  30 |     //     console.log("Promp Alert:", dialog.message())
  31 |     // })
  32 | 
  33 |     await page.locator('//button[@class="btn btn-info"]').click()
  34 | 
  35 | })
```