import CssBaseline from "@mui/material/CssBaseline";
import Footer from "../Footer";
import { useTranslation } from "react-i18next";
import {
  DataGrid,
  frFR,
  enUS,
  GridColDef,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { RecordsProps, RecordsRows } from "../../../utils/Props";
import {
  ClickAwayListener,
  Container,
  createTheme,
  MenuItem,
  Select,
  Theme,
  ThemeOptions,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
  Link
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


const Records = (props: RecordsProps) => {
  const globalTheme = useTheme();
  const { t, i18n } = useTranslation();
  const [rows, setRows] = useState<RecordsRows[]>();
  const [sex, setSex] = useState("male");
  const [category, setCategory] = useState("avenir");
  const [type, setType] = useState("individual");
  const [openTip, setOpenTip] = useState(false);
  const columns: GridColDef[] = [
    {
      field: "swim",
      headerName: t("swim"),
      filterable: type === "individual",
      type: "singleSelect",
      valueOptions: [
        t("freestyle"),
        t("backstroke"),
        t("breaststroke"),
        t("butterfly"),
        t("medley"),
      ],
    },
    {
      field: "length",
      headerName: t("length"),
      type: "singleSelect",
      valueOptions: ["50m", "100m", "200m", "400m", "1500m"],
      filterable: type === "individual",
    },
    {
      field: "firstName",
      headerName: t("firstName"),
      filterable: false,
    },
    {
      field: "lastName",
      headerName: t("lastName"),
      filterable: false,
    },
    {
      field: "time",
      headerName: t("time"),
      type: "dateTime",
      disableColumnMenu: true,
      filterable: false,
    },
    {
      field: "place",
      headerName: t("place"),
      sortable: false,
      filterable: false,
    },
    {
      field: "date",
      headerName: t("date"),
      type: "date",
      filterable: false,
    },
  ];
  const gridLanguage = {
    fr: frFR.components.MuiDataGrid.defaultProps.localeText,
    en: enUS.components.MuiDataGrid.defaultProps.localeText,
  };
  const CustomToolbar = () => {
    const year = new Date().getFullYear();
    return (
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ overflowX: "auto", justifyContent: "space-between" }}
      >
        <GridToolbarFilterButton sx={{ minWidth: "auto", color: globalTheme.palette.secondary.main }} onResize={undefined} onResizeCapture={undefined} />
        <GridToolbarDensitySelector sx={{ minWidth: "auto", color: globalTheme.palette.secondary.main }} onResize={undefined} onResizeCapture={undefined} />
        <Select
          labelId="typeSelector"
          id="typeSelector"
          value={type}
          label="Type"
          variant="standard"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <MenuItem
            value={"individual"}
            onClick={() => {
              setCategory("avenir");
              if (sex === "mixt") setSex("male");
            }}
          >
            {t("individual")}
          </MenuItem>
          <MenuItem
            value={"relay"}
            onClick={() => setCategory("avenirPoussin")}
          >
            {t("relay")}
          </MenuItem>
        </Select>
        <Select
          labelId="sexSelector"
          id="sexSelector"
          value={sex}
          label="Sexe"
          variant="standard"
          onChange={(e) => {
            setSex(e.target.value);
          }}
          defaultValue={"male"}
        >
          <MenuItem
            value={"male"}
            onClick={() => {
              if (type === "relay" && category === "mixt")
                setCategory("avenirPoussin");
            }}
          >
            {t("male")}
          </MenuItem>
          <MenuItem
            value={"female"}
            onClick={() => {
              if (type === "relay" && category === "mixt")
                setCategory("avenirPoussin");
            }}
          >
            {t("female")}
          </MenuItem>
          {type === "relay" && (
            <MenuItem value={"mixt"} onClick={() => setCategory("mixt")}>
              {t("mixt")}
            </MenuItem>
          )}
        </Select>
        {type === "individual" ? (
          <Select
            labelId="categorySelector"
            id="categorySelector"
            value={category}
            label="Catégorie"
            variant="standard"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            defaultValue={"avenir"}
          >
            <MenuItem value={"avenir"}>Avenir</MenuItem>
            <MenuItem value={"poussin"}>Poussin</MenuItem>
            <MenuItem value={"benjamin"}>Benjamin</MenuItem>
            <MenuItem value={"minime"}>Minime</MenuItem>
            <MenuItem value={"cadet"}>Cadet</MenuItem>
            <MenuItem value={"junior"}>Junior</MenuItem>
          </Select>
        ) : sex === "mixt" ? (
          <Select
            labelId="categorySelector"
            id="categorySelector"
            value={category}
            label="Catégorie"
            variant="standard"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <MenuItem value={"mixt"}>{t("allCategory")}</MenuItem>
          </Select>
        ) : (
          <Select
            labelId="categorySelector"
            id="categorySelector"
            value={category}
            label="Catégorie"
            variant="standard"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            defaultValue={"avenirPoussin"}
          >
            <MenuItem value={"avenirPoussin"}>Avenir/Poussin</MenuItem>
            <MenuItem value={"benjaminMinime"}>Benjamin/Minime</MenuItem>
            <MenuItem value={"cadetJunior"}>Cadet/Junior/Senior</MenuItem>
          </Select>
        )}
        <ClickAwayListener onClickAway={() => setOpenTip(false)}>
          <Tooltip
            open={openTip}
            style={{ cursor: "pointer" }}
            placement={"left"}
            title={
              <>
                <Typography>{t("catIntro")}</Typography>
                <Typography>
                  {t("catAvenirs", { year: `${year - 9}` })}
                </Typography>
                <Typography>
                  {t("catPoussins", {
                    startYear: `${year - 10}`,
                    endYear: `${year - 11}`,
                  })}
                </Typography>
                <Typography>
                  {t("catBenjamins", {
                    startYear: `${year - 12}`,
                    endYear: `${year - 13}`,
                  })}
                </Typography>
                <Typography>
                  {t("catMinimes", {
                    startYear: `${year - 14}`,
                    endYear: `${year - 15}`,
                  })}
                </Typography>
                <Typography>
                  {t("catCadets", {
                    startYear: `${year - 16}`,
                    endYear: `${year - 17}`,
                  })}
                </Typography>
                <Typography>
                  {t("catJuniors", { year: `${year - 18}` })}
                </Typography>
              </>
            }
          >
            <InfoOutlinedIcon
              fontSize="large"
              onClick={() => setOpenTip(!openTip)}
            />
          </Tooltip>
        </ClickAwayListener>
      </Toolbar>
    );
  };


  const innerThemeOptions: ThemeOptions = {
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: globalTheme.palette.secondary.main
          }
        }
      },
      MuiInput: {
        styleOverrides: {
          root: {
            color: globalTheme.palette.secondary.main,
            "&:before": {
              borderColor: globalTheme.palette.secondary.main,
            },
            "&:after": {
              borderColor: globalTheme.palette.secondary.main,
            }
          },
        }
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: globalTheme.palette.secondary.main
          }
        }
      },
      MuiNativeSelect: {
        styleOverrides: {
          icon: {
            color: globalTheme.palette.secondary.main
          },
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: globalTheme.palette.secondary.main,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            color: globalTheme.palette.secondary.main,
            backgroundColor: globalTheme.palette.secondary.contrastText
          }
        }
      }
    },
  }

  useEffect(() => {
    const rows: RecordsRows[] = [];
    fetch(`/records/${type}/${sex}/${category}.csv`)
      .then((res: { text: () => any }) => res.text())
      .then((text: string) => {
        const lines = text.split("\n");
        lines.forEach((line, index) => {
          const elements = line.split(",");
          rows.push({
            id: index,
            swim: t(elements[0] as unknown as TemplateStringsArray),
            length: elements[1],
            lastName: elements[2],
            firstName: elements[3],
            time: elements[4],
            place: elements[5] !== "" ? elements[5] : "unknown",
            date: elements[6],
          });
        });
        setRows(rows);
      })
      .catch((error) => console.log(error));
  }, [sex, category, type, i18n.language, t]);

  useEffect(() => {
    localStorage.setItem("page", "ranking");
  }, []);
  return (
    <div className="Core">
      <CssBaseline />
      <ThemeProvider
        theme={(theme: Theme) =>
          createTheme(theme, innerThemeOptions)
        }
      >
        <Container maxWidth="lg" style={{ maxHeight: "60vh" }}>


          {rows !== undefined && rows?.length !== 0 && (
            <div
              id={"DataGridContainer"}
              style={{ height: "74vh", width: "100%", marginTop: "1vh" }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                disableSelectionOnClick
                components={{
                  Toolbar: CustomToolbar,
                }}
                hideFooter
                pageSize={rows.length}
                localeText={
                  gridLanguage[i18n.language as keyof typeof gridLanguage]
                }
                style={{ backgroundColor: globalTheme.palette.background.paper, color: globalTheme.palette.secondary.main }}
              />
            </div>
          )}
          <Typography>
            Pour mettre à jour les records du club vous pouvez aller{" "}
            <Link
              href="https://github.com/AladdinVR/aladdinvr.github.io/blob/main/README.md"
              target={"_blank"}
              rel={"noreferrer"}
              underline="hover"
              color="secondary"
            >
              sur ce site
            </Link>
          </Typography>

        </Container>
      </ThemeProvider>
      <Footer />

    </div>
  );
};

export default Records;
