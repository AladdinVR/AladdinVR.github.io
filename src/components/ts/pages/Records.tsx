import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Header";
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
import { RecordsProps } from "../../../utils/Props";
import { MenuItem, Select, Toolbar, Tooltip, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Records = () => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  const [rows, setRows] = useState<RecordsProps[]>();
  const [sex, setSex] = useState("male");
  const [category, setCategory] = useState("avenir");
  const [type, setType] = useState("individual");
  const sections = [
    { title: t("home"), url: "home" },
    { title: t("join"), url: "join" },
    { title: t("history"), url: "history" },
    { title: t("song"), url: "song" },
    { title: t("record"), url: "ranking" },
  ];
  const columns: GridColDef[] = [
    {
      field: "swim",
      headerName: t("swim"),
      width: 100,
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
      width: 100,
      type: "singleSelect",
      valueOptions: ["50m", "100m", "200m", "400m", "1500m"],
      filterable: type === "individual",
    },
    {
      field: "firstName",
      headerName: t("firstName"),
      width: 150,
      filterable: false,
    },
    {
      field: "lastName",
      headerName: t("lastName"),
      width: 150,
      filterable: false,
    },
    {
      field: "time",
      headerName: t("time"),
      type: "dateTime",
      width: 150,
      disableColumnMenu: true,
      filterable: false,
    },
    {
      field: "place",
      headerName: t("place"),
      width: 150,
      sortable: false,
      filterable: false,
    },
    {
      field: "date",
      headerName: t("date"),
      type: "date",
      width: 150,
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
        <GridToolbarFilterButton sx={{ minWidth: "auto" }} />
        <GridToolbarDensitySelector sx={{ minWidth: "auto" }} />
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
              if (type === "relay" && category === "10x50")
                setCategory("avenirPoussin");
            }}
          >
            {t("male")}
          </MenuItem>
          <MenuItem
            value={"female"}
            onClick={() => {
              if (type === "relay" && category === "10x50")
                setCategory("avenirPoussin");
            }}
          >
            {t("female")}
          </MenuItem>
          {type === "relay" && (
            <MenuItem value={"mixt"} onClick={() => setCategory("10x50")}>
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
            <MenuItem value={"10x50"}>{t("allCategory")}</MenuItem>
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

        <Tooltip
          disableFocusListener
          disableTouchListener
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
                {t("catJuniors", { year: `${year - 9}` })}
              </Typography>
            </>
          }
        >
          <InfoOutlinedIcon fontSize="large" />
        </Tooltip>
      </Toolbar>
    );
  };

  useEffect(() => {
    const rows: RecordsProps[] = [];
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

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Records" sections={sections} />
        {rows !== undefined && rows?.length !== 0 && (
          <div style={{ height: "70vh", width: "100%", marginTop: "1vh" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              disableSelectionOnClick
              components={{
                Toolbar: CustomToolbar,
              }}
              pageSize={rows.length}
              rowsPerPageOptions={[5, 10, rows.length]}
              localeText={
                gridLanguage[i18n.language as keyof typeof gridLanguage]
              }
            />
          </div>
        )}
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Records;
