import { IconXboxX } from "@tabler/icons-react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Text,
  Group,
  Button,
  Modal,
  Stack,
  Flex,
} from "@mantine/core";
import TermAndConditions from "./TermsAndConditions";

const handleSubmit = async (event, form) => {
  event.preventDefault();
  console.log(JSON.stringify(form.values));
  try {
    const response = await fetch(
      "http://safeplane-78a3982e4d7a.herokuapp.com/add-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form.values),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Response data:", responseData);

    // Handle response data as needed
  } catch (error) {
    console.error("Error:", error);
    // Handle errors
  }
};

export default function Login(props) {
  const [type, toggle] = useToggle(["login", "register", "terms"]);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      terms: true,
    },
    validate: {
      fullName: (val) =>
        val.length < 2 ? "Name must have at least 2 letters" : null,
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      term: (val) =>
        val === false ? "You must approve with our terms and conditions" : null,
    },
  });

  return (
    <Modal
      opened={props.open}
      onClose={() => {
        toggle("login");
        props.close();
      }}
      radius="lg"
      size={type === "terms" ? "lg" : "md"}
      closeButtonProps={{
        icon: <IconXboxX size={30} stroke={2} />,
      }}
      classNames={{
        header: "login-modal-root",
        body: "login-modal-root",
      }}
    >
      {type !== "terms" && (
        <Paper radius="md" p="xl" withBorder className="login-paper">
          <Text size="lg" fw={500} align={"center"}>
            Welcome to Safe Plan
          </Text>

          <form onSubmit={(event) => handleSubmit(event, form)}>
            <Stack>
              {type === "register" && (
                <TextInput
                  label="Full Name"
                  placeholder="Your full name"
                  value={form.values.name}
                  size="md"
                  onChange={(event) =>
                    form.setFieldValue("fullName", event.currentTarget.value)
                  }
                  error={form.errors.name}
                  radius="md"
                />
              )}

              <TextInput
                required
                label="Email"
                size="md"
                placeholder="hello@mantine.dev"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email}
                radius="md"
              />

              <PasswordInput
                required
                label="Password"
                size="md"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={form.errors.password}
                radius="md"
              />

              {type === "register" && (
                <Flex>
                  <Checkbox
                    required
                    checked={form.values.terms}
                    label="&nbsp;"
                    color="#57333d"
                    onChange={(event) =>
                      form.setFieldValue("terms", event.currentTarget.checked)
                    }
                    error={form.errors.terms}
                  />
                  <Anchor
                    underline="never"
                    c={"black"}
                    onClick={() => toggle("terms")}
                  >
                    I accept{" "}
                    <span className="term-and-condition">
                      terms and conditions
                    </span>
                  </Anchor>
                </Flex>
              )}
            </Stack>

            <Group justify="space-between" mt="md">
              <Anchor
                component="button"
                type="button"
                c="dimmed"
                onClick={() =>
                  toggle(type === "register" ? "login" : "register")
                }
                size="sm"
              >
                {type === "register"
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Anchor>
              <Button type="submit" radius="xl" mt={5} color="#57333d">
                {upperFirst(type)}
              </Button>
            </Group>
          </form>
        </Paper>
      )}
      {type === "terms" && <TermAndConditions toggle={toggle} />}
    </Modal>
  );
}
