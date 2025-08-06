import { Column, Heading, Text, Button, Flex } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`${baseURL}/og?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column gap="xl" horizontal="center" paddingY="xl">
        <Heading variant="display-strong-s" className="text-center">
          Get In Touch
        </Heading>

        <Text
          variant="body-default-l"
          className="text-center"
          onBackground="neutral-weak"
        >
          I’m always open to new opportunities and collaborations. Feel free to reach out!
        </Text>

        <Column gap="l" fillWidth maxWidth="s">
          <Button
            href={gallery.contact.linkedin}
            variant="primary"
            size="l"
            prefixIcon="linkedin"
            fillWidth
          >
            LinkedIn
          </Button>

          <Button
            href={`mailto:${gallery.contact.email}`}
            variant="secondary"
            size="l"
            prefixIcon="email"
            fillWidth
          >
            Email
          </Button>

          <Button
            href={gallery.contact.github}
            variant="tertiary"
            size="l"
            prefixIcon="github"
            fillWidth
          >
            GitHub
          </Button>

          {gallery.contact.resume && (
            <Button
              href={gallery.contact.resume}
              variant="tertiary"
              size="l"
              prefixIcon="document"
              fillWidth
            >
              Resume
            </Button>
          )}
        </Column>

        <Text
          variant="body-default-s"
          className="text-center"
          onBackground="neutral-weak"
        >
          Based in Vancouver, BC
        </Text>
      </Column>
    </Column>
  );
}
