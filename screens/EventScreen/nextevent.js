import React, { Component } from 'react';

// React Native components
import { Platform, Animated } from 'react-native';

// Gradient component
import { LinearGradient } from 'expo';

// Components
import {
    Container, 
    Content,
    Section,
    View,
    Left,
    Button,
    TabContainer,
    Tab,
    Image,
    Icon,
    Icon as IconComponent,
    Text,
    Header,
    Body,
    Title,
    Title as TitleComponent,
    Subtitle,
    Touchable,
    Thumbnail
}
from './../../components';

// Modules
import {
    ModuleEventListHorizontal,
} from './../../components/modules';

import variables from './../../components/styles/_variables';

// Fake Data
import {
    categories,
    events
} from './../../assets/fakeData';


// Inner styles
const styles = {

    // -------------------------------------------------
    // Header

    header: {

        position:"absolute",
        overflow:"hidden",
        zIndex:1,
        top:0,
        left:0,
        right:0 

    },

    headerGradient: {

        position: "absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,

    },

    // -------------------------------------------------

    // -------------------------------------------------
    // Banner

    bannerSection: {

        width:"100%",
        height:200,

    },

    bannerOverlay: {

        position: "absolute",
        zIndex: 1,
        top:0,
        bottom:0,
        left:0,
        right:0,

    },

};

// Animated components
const TitleHeader = Animated.createAnimatedComponent(TitleComponent);
const IconHeader = Animated.createAnimatedComponent(IconComponent);


export default class NextEvent extends Component {

    constructor(props) {

          super(props);

          this.state = {
            scrollY: new Animated.Value(0),
          };

    }


    render() {

        // Header background
        const bgHeader = this.state.scrollY.interpolate({
            inputRange: (Platform.OS === "ios" || Platform.Version < 21) ? [100, 100] : [130, 130],
            outputRange: ['transparent', variables.darkColor],
        });

        // <LinerarGradient />
        const gradientOpacity = this.state.scrollY.interpolate({
            inputRange: [50, 100],
            outputRange: [1, 0],
        });

        // Overlay of banner
        const bgBannerOverlay = this.state.scrollY.interpolate({
            inputRange: (Platform.OS === "ios" || Platform.Version < 21) ? [0, 100] : [0, 130],
            outputRange: ['transparent', variables.darkColor],
        });

        // Show <Title> in header
        const titleColor = this.state.scrollY.interpolate({
            inputRange: [50, 100],
            outputRange: ['transparent', 'rgba(255,255,255,1)'],
        });

        // Change color of <Icon/> in header
        const iconColor = this.state.scrollY.interpolate({
            inputRange: [50, 100],
            outputRange: ['white', variables.lightColor],
            extrapolate: "clamp"
        });

        const navigate = this.props.navigation.navigate;
        
        return (
          
            <Container>
                <Animated.View style={[
                    styles.header,
                    { backgroundColor: bgHeader },
                ]}>
                
                    <Header hasTitle transparent>
                        <Animated.View style={[
                            styles.headerGradient,
                            { opacity: gradientOpacity }
                        ]}>
                            <LinearGradient 
                                style={{ height:"100%" }} 
                                colors={['rgba(0,0,0,0.87)', 'transparent']} />
                        </Animated.View>

                        <Left>
                            <Button onPress={() => this.props.navigation.goBack()}>
                                <IconHeader name="back" style={{ color:iconColor }} />
                            </Button>
                        </Left>

                        <Body>
                            <TitleHeader
                                numberOfLines={1}
                                fsx2
                                fontWeightMedium
                                style={{ color: titleColor }}
                            >
                                DJ EKG 12 Hodinový Solo Set
                            </TitleHeader>
                        </Body>
                    </Header>
                    
                </Animated.View>

                <Animated.ScrollView
                    style={{ flex:1 }}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                      [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
                    )}
                >
                    <View bgColorLight>

                        <Section>
                            <Animated.View style={[
                                    styles.bannerOverlay,
                                    { backgroundColor: bgBannerOverlay }
                                ]} 
                            />

                            <Image
                                style={styles.bannerSection}
                                source={{ uri:'https://scontent.fbts6-1.fna.fbcdn.net/v/t31.0-8/q87/p960x960/21083408_10155549947165420_2896701041725471569_o.jpg?oh=ca7a24902da672865a3b85c6d8d8856a&oe=5A7ECDA9' }} />
                        </Section>



                        <Section boxSection>

                            <View row>
                                <View mlx2 mrx10 centerHorizontal>
                                    <Text fsx14>1</Text>
                                    <Text uppercase fsx1 colorActive>MAY</Text>
                                </View>

                                <View colx10 mtx1 centerVertical>
                                    <Title numberOfLines={2} fsx5>DJ EKG 12 Hodinový Solo Set</Title>
                                    <View mbx3 />
                                    <Subtitle fsx1>10 november o 20:00 - 11 november o 5:00</Subtitle>
                                </View>
                            </View>

                            <View mbx5 />

                            
                        </Section>



                        <View lineSeparator />


                        
                        <Section>
                            <TabContainer tabIconText>
                                <Tab>
                                    <Button active>
                                        <Icon name="check" />
                                        <Text>Attend</Text>
                                    </Button>
                                </Tab>

                                <Tab>
                                    <Button>
                                        <Icon name="star" />
                                        <Text>Interest</Text>
                                    </Button>
                                </Tab>

                                <Tab>
                                    <Button>
                                        <Icon name="share" />
                                        <Text>Share</Text>
                                    </Button>
                                </Tab>

                                <Tab>
                                    <Button active>
                                        <Icon name="save-active" />
                                        <Text>Saved</Text>
                                    </Button>
                                </Tab>
                            </TabContainer>
                        </Section>



                        <View mbx8 />



                        <Section boxSection>
                            <View mbx8>
                                <Title fsx3 mbx1>22 may, friday</Title>
                                <View mbx2 />
                                <Subtitle fsx1>in 2 weeks</Subtitle>
                            </View>

                            <View mbx8>
                                <Title fsx3 mbx1>Tomorrowland</Title>
                                <View mbx2 />
                                <Subtitle fsx1>Adress of event place</Subtitle>
                            </View>

                            <View>
                                <Title fsx3 mbx1 colorActive>Get Tickets</Title>
                                <View mbx2 />
                                <Subtitle fsx1>www.ticketportal.sk</Subtitle>
                            </View>
                        </Section>


                        <View mbx8 />


                        <Section boxSection>
                            <Title fsx2 mbx4 fontWeightBold>Info</Title>

                            <View mbx4 />

                            <Text paragraph>
                                How many free autoresponders have you tried? Really how many? And how many emails
                                did you get through using them? How do you know? How many people opened your followup message?
                                My point here is that if you have no clue for the answers above you probably are not operating a 
                                ollowup campaign successfully. These are crucial element that must be explored when you are choosing an autoresponder.
                            </Text>
                        </Section>


                        <View mbx8 />



                        <Section boxSection>
                            <View mbx8 headerSection>
                                <Title fsx2 fontWeightBold>Upcoming events</Title>
                                <Button>
                                    <Text colorActive>See all</Text>
                                </Button>
                            </View>

                            <Touchable>
                                <View row>
                                    <View mlx2 mrx10 centerHorizontal>
                                        <Text fsx12>1</Text>
                                        <Text uppercase fsx1 colorActive>may</Text>
                                    </View>

                                    <View colx10 centerVertical>
                                        <Title fsx3 numberOfLines={1}>This is upcoming event lorem ipsum</Title>
                                        <View mbx2 />
                                        <Subtitle fsx1 numberOfLines={1}>Place of upcoming event</Subtitle>
                                    </View>
                                </View>
                            </Touchable>


                            <View mbx8 />


                            <Touchable>
                                <View row>
                                    <View mlx2 mrx10 centerHorizontal>
                                        <Text fsx12>12</Text>
                                        <Text uppercase fsx1 colorActive>jun</Text>
                                    </View>

                                    <View colx10 centerVertical>
                                        <Title fsx3 numberOfLines={1}>Testing Grid System lorem ipsum dolor</Title>
                                        <View mbx2 />
                                        <Subtitle fsx1 numberOfLines={1}>Look at this amazing grid system</Subtitle>
                                    </View>
                                </View>
                            </Touchable>


                            <View mbx8 />


                            <Touchable>
                                <View row>
                                    <View mlx2 mrx10 centerHorizontal>
                                        <Text fsx12>5</Text>
                                        <Text uppercase fsx1 colorActive>jul</Text>
                                    </View>

                                    <View colx10 centerVertical>
                                        <Title fsx3 numberOfLines={1}>Next super event</Title>
                                        <View mbx2 />
                                        <Subtitle fsx1 numberOfLines={1}>Some place</Subtitle>
                                    </View>
                                </View>
                            </Touchable>
                        </Section>

                    </View>
                </Animated.ScrollView>
            </Container>
        
        );

    }
    
}