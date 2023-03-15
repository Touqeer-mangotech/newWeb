import React, { useState } from 'react'
import { Box, CardMedia, Grid, IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { EditLocationAlt, CloudUpload, Medication } from '@mui/icons-material';
import Images from '../../assets/Images'
import Layout from '../../layout/Layout'
import SimpleButton from '../../components/Buttons/SimpleButton';
import colors from '../../styles/colors';
import DataField from './../../components/Fields/DataField';
import RequestMedCard from './../../components/Card/RequestMedCard';
import { useForm } from 'react-hook-form';

function RequestMedication() {
    const [image, setImage] = useState('')
    const [reqMedData, setReqMedData] = useState([])
    console.log("🚀 ~ file: RequestMedication.js:15 ~ RequestMedication ~ reqMedData:", reqMedData)

    //* For Set Images 
    const handleImageChange = (event) => {
        console.log(event.target.files[0])
        const data = URL.createObjectURL(event.target.files[0])
        setImage(data)
    }
    //* For Add Medication Order
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const requestData = (formData) => {
        const data = []
        data.push({ medicine: formData.medName, img: image })
        setReqMedData([...reqMedData, ...data])
        setValue("medName", "")
        setImage("")
    }

    //* For Delete Data
    const deleteData = (value) => {
        const remove = reqMedData.filter((item) => {
            return item.medicine !== value
        })
        setReqMedData(remove)
    }
    return (
        <Layout>
            <Box sx={{ px: 2, py: 6 }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={8} sx={{ px: 1 }}>
                        <Box sx={{
                            boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px`,
                            borderRadius: "8px",
                            bgcolor: colors.white, minHeight: "450px"
                        }}>
                            <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
                                <Typography variant='h5' fontWeight="bold">Request a medication</Typography>
                            </Box>
                            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1.5 }}>
                                <Typography sx={{ fontWeight: "bold", }} > Order No</Typography>
                                <Typography sx={{ fontWeight: "bold", }}>Medicine</Typography>
                                <Typography sx={{ fontWeight: "bold", }} >Quantity </Typography>
                                <Typography sx={{ fontWeight: "bold", }}>Action</Typography>
                            </Box> */}
                            {reqMedData.map((item, index) => (
                                <Box key={index} px={1} width="100%" display="flex" justifyContent="center">
                                    <RequestMedCard data={item} deleteData={deleteData} />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                boxShadow: `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px`,
                                borderRadius: "8px", px: 1,
                                bgcolor: colors.white, minHeight: "450px"
                            }}>
                            <Typography component="form" onSubmit={handleSubmit(requestData)}>
                                <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
                                    <Typography variant='h6' sx={{}}> Place Order </Typography>
                                </Box>
                                <Box sx={{ py: 0.5 }}>
                                    <DataField label="Medicine Name"
                                        error={errors?.medName?.message}
                                        register={register("medName", {
                                            required: "Enter Medicine Name",
                                            pattern: {
                                                message: "Enter Medicine Name",
                                            },
                                        }
                                        )}
                                    />
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", py: 0.5 }}>
                                    <Typography variant='h6'> Upload Image </Typography>
                                </Box>
                                {
                                    image !== "" &&
                                    <Box sx={{ display: "flex", justifyContent: "center" }} >
                                        <CardMedia component={'img'} image={image} sx={{ height: "120px", width: "130px", objectFit: "contain" }} />
                                    </Box>
                                }
                                <Box sx={{ display: "flex", justifyContent: "center", py: 0.5 }}>
                                    <span
                                        className="btn btn-primary btn-file"
                                        style={{
                                            position: "relative", overflow: "hidden",
                                            color: "white", height: "50px", width: "fit-content",
                                            padding: "15px", borderRadius: "5px", cursor: "pointer",
                                            display: "flex", alignItems: "center", gap: "10px",
                                        }}
                                    >
                                        <CloudUpload sx={{
                                            fontSize: "50px",
                                            color: colors.primary,
                                            cursor: 'pointer',
                                            '&:hover': {
                                                color: colors.secondary,
                                                transition: '0.3s ease-in-out',
                                            },
                                        }} />
                                        <input
                                            type="file"
                                            style={{
                                                position: " absolute", filter: "alpha(opacity=0)",
                                                top: "0", right: "0", align: "right",
                                                minWidth: "100%", minHeight: "100%", fontSize: " 100px",
                                                opacity: "0", outline: "none", background: "white",
                                                cursor: "inherit", display: "block",
                                            }}

                                            onChange={(event) => {
                                                handleImageChange(event)
                                            }}
                                        />
                                    </span>
                                </Box>
                                {/* <Box sx={{ display: "flex", justifyContent: "center", pt: 0.5 }}>
                                    <Typography variant='h6'> Address </Typography>
                                </Box> */}
                                {/* <Box sx={{}}>
                                    <DataField label="Add Address"
                                        error={errors?.address?.message}
                                        register={register("address", {
                                            required: "Enter Delivery Address",
                                            pattern: {
                                                message: "Enter Delivery Address",
                                            },
                                        }
                                        )}
                                        disabled
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="address label"
                                                        //   onClick={()=>setOpen(!open)}
                                                        edge="end">
                                                        <EditLocationAlt />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }} />
                                </Box> */}
                                <Box sx={{}}>
                                    <SimpleButton title="Proceed" type="submit" />
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default RequestMedication
