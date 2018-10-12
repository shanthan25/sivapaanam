import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Stepper from 'react-native-js-stepper'
import Cart from './Cart';
import Shipping from './Shipping';
import Checkout2 from "./Checkout2";
import Confirm from "./Confirm";

type Props = {}

export default class ViewScreen extends React.Component<Props> {
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <Stepper
                ref={(ref: any) => {
                    this.stepper = ref
                }}
                validation={false}
                activeDotStyle={styles.activeDot}
                inactiveDotStyle={styles.inactiveDot}
                showTopStepper={true}
                showBottomStepper={true}
                steps={['Cart', 'Shipping', 'Checkout', 'Confirm']}
                backButtonTitle="BACK"
                nextButtonTitle="NEXT"
                activeStepStyle={styles.activeStep}
                inactiveStepStyle={styles.inactiveStep}
                activeStepTitleStyle={styles.activeStepTitle}
                inactiveStepTitleStyle={styles.inactiveStepTitle}
                activeStepNumberStyle={styles.activeStepNumber}
                inactiveStepNumberStyle={styles.inactiveStepNumber}>

                <Cart/>
                <Shipping/>
                <Checkout2/>
                <Confirm/>

            </Stepper>

        )
    }
}

const styles = StyleSheet.create({
    activeDot: {
        backgroundColor: 'grey'
    },
    inactiveDot: {
        backgroundColor: '#ededed'
    },
    activeStep: {
        backgroundColor: 'grey'
    },
    inactiveStep: {
        backgroundColor: '#ededed'
    },
    activeStepTitle: {
        fontWeight: 'bold'
    },
    inactiveStepTitle: {
        fontWeight: 'normal'
    },
    activeStepNumber: {
        color: 'white'
    },
    inactiveStepNumber: {
        color: 'black'
    }
})