import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Form, Grid, Header, Input, Label, Segment } from 'semantic-ui-react';

const Register = ({
    handleSubmit,
    handleChange,
    data,
    formErrors
}) => (
    <Container text>
        <Grid stackable centered>
            <Grid.Column className="login-form-grid-column">
                <Header as="h2" color="teal" textAlign="center">
                    Register User
                </Header>
                <Form size="large" onSubmit={handleSubmit}>
                    <Segment stacked>
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Form.Field>
                                        <Input
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="Email..."
                                            className="text-box-3-col"
                                            defaultValue={data.email}
                                            onChange={handleChange}
                                        />
                                    </Form.Field>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    {formErrors.email &&
                                    <Label basic color="red" pointing="left">{formErrors.email}</Label>
                                    }
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Form.Field>
                                        <Input
                                            name="username"
                                            autoComplete="username"
                                            placeholder="Username..."
                                            className="text-box-3-col"
                                            defaultValue={data.username}
                                            onChange={handleChange}
                                        />
                                    </Form.Field>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    {formErrors.username &&
                                    <Label basic color="red" pointing="left">{formErrors.username}</Label>
                                    }
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Form.Field>
                                        <Input
                                            name="password"
                                            type="password"
                                            autoComplete="password"
                                            placeholder="Password..."
                                            className="text-box-3-col"
                                            onChange={handleChange}
                                            defaultValue={data.password}
                                        />
                                    </Form.Field>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    {formErrors.password &&
                                    <Label basic color="red" pointing="left">{formErrors.password}</Label>
                                    }
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <Form.Field>
                                        <Input
                                            type="password"
                                            autoComplete="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password..."
                                            className="text-box-3-col"
                                            onChange={handleChange}
                                        />
                                    </Form.Field>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    {formErrors.confirmPassword &&
                                    <Label basic color="red" pointing="left">{formErrors.confirmPassword}</Label>
                                    }
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row />
                        </Grid>
                        <Button
                            color="pink"
                            type="submit"
                            fluid
                            size="large"
                            disabled={!data.formValid}
                        >Register
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    </Container>
);

Register.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
    formErrors: PropTypes.shape({})
};

Register.defaultProps = {
    formErrors: {}
};

export default Register;
