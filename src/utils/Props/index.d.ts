export type FeaturedPostProps = {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
};

export type MarkdownProps = {
  fileName: string;
};

export type SelectButtonProps = {
  div?: React.HTMLAttributes<HTMLDivElement>;
  className?: string;
  menuItemsStyle?: SxProps<Theme>;
  selectItems: {
    inputLabel: { text: string; style?: SxProps<Theme> };
    menuItems: { id: number | string; text: string }[];
  };
  onChange?: (e: SelectChangeEvent<string>) => void;
  onClick?: (e: SelectChangeEvent<string>) => void;
};

export type HeaderProps = {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
};

export type MainProps = {
  posts: ReadonlyArray<string>;
};

export type SidebarProps = {
  archives?: ReadonlyArray<{
    url: string;
    title: string;
  }>;
  description?: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
    href: string;
  }>;
  title?: string;
};
